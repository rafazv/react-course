// this is a reducer
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errMess: null, dishes: action.payload };

        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] };

        case ActionTypes.DISHES_FAILDED:
            return { ...state, isLoading: false, errMess: action.payload };

        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errMess: null, dishes: action.payload };

        default:
            return state;
    }
};