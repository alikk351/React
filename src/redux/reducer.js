import { COMMENTS } from "./../shared/comments";
import { LEADERS } from "./../shared/leaders";
import { PROMOTIONS } from "./../shared/promotions";
import DISHES from "./../shared/dishes";

export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    comments: COMMENTS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => { // updates state
    // 'state = initialState' => for default value else it would have no initial state
    return state;
};
