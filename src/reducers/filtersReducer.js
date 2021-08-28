import { SET_FILTERS, SET_FILTER_APPLIED } from '../constants/actionTypes';
import initialState from './initialState';

export function filters(state = initialState().filters, action) {
    let filters, copy, index;
    switch (action.type) {
        case SET_FILTERS:
            filters = state.list;
            index = filters.indexOf(action.obj);
            if (index == -1) {
                copy = [...filters, action.obj];
            } else {
                copy = filters.filter((filter) => filter !== action.obj);
            }
            return Object.assign({}, state, {
                list: copy,
            });
        case SET_FILTER_APPLIED:
            return Object.assign({}, state, {
                isApplied: false,
            });
        default:
            return state;
    }
}
