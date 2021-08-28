import { ApiUrl } from '../config/config';
import fetch from 'cross-fetch';
import { REQUEST_CARDS, RECEIVE_CARDS, UPDATE_CARDS } from '../constants/actionTypes';

export function requestCards(flag) {
    return { type: REQUEST_CARDS, flag };
}

export function receiveCards(json) {
    return {
        type: RECEIVE_CARDS,
        cards: json.cards,
        receivedAt: Date.now(),
    };
}

export function updateCards(filters) {
    return {
        type: UPDATE_CARDS,
        filters: filters,
        receivedAt: Date.now(),
    };
}

export function fetchCards() {
    return async (dispatch) => {
        try {
            dispatch(requestCards(true));
            const res = await fetch(ApiUrl);

            if (res.status >= 400) {
                console.log('error');
            }

            const json = await res.json();

            dispatch(receiveCards(json));
        } catch (err) {
            console.log('error');
        }
    };
}
