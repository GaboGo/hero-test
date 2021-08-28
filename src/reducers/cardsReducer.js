import Card from '../components/Cards/Card';
import { REQUEST_CARDS, RECEIVE_CARDS, UPDATE_CARDS } from '../constants/actionTypes';
import initialState from './initialState';

const populateTags = (cards) => {
    let tags = [];
    cards.map((card) => {
        card.tags.map((tag) => {
            if (tags.indexOf(tag) === -1) {
                tags.push(tag);
            }
        });
    });
    return tags.sort();
};

const getFilteredCards = (data, filters) => {
    return filters.length > 0
        ? data.filter((card) => {
              let applyFilter = 0;

              filters.map((filter) => {
                  if (card.tags.indexOf(filter) !== -1) {
                      applyFilter++;
                  }
              });

              if (applyFilter === filters.length) {
                  return card;
              }

              return false;
          })
        : data;
};

export function cards(state = initialState().cards, action) {
    switch (action.type) {
        case REQUEST_CARDS:
            return Object.assign({}, state, {
                isFetching: action.flag,
            });
        case RECEIVE_CARDS:
            return Object.assign({}, state, {
                isFetching: false,
                list: action.cards,
                bckup: action.cards,
                tags: populateTags(action.cards),
                lastUpdated: action.receivedAt,
            });
        case UPDATE_CARDS:
            return Object.assign({}, state, {
                isFetching: false,
                list: getFilteredCards(state.bckup, action.filters),
                lastUpdated: action.receivedAt,
            });
        default:
            return state;
    }
}
