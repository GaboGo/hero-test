import { combineReducers } from 'redux';
import { filters } from './filtersReducer';
import { cards } from './cardsReducer';

const appReducers = combineReducers({
    cards,
    filters,
});

export default appReducers;
