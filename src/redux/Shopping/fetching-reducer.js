import * as actionTypes from "./shopping-types";

const fetchReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_FETCHED_DATA:
            return [...action.payload];
        default:
            return state;
    }

}

export default fetchReducer;