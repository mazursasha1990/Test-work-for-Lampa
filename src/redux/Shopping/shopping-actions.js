import axios from "axios";
import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};

export const adjustItemQty = (itemID, qty) => {
    return {
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: {
            id: itemID,
            qty,
        },
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};

export const fetchData = () => {
    return (dispatch) => axios.get("https://run.mocky.io/v3/e2584ce0-c1e7-4ea8-ac5d-15171588d82c")
        .then(response => {
            return response.data;
        })
        .then(data => {
            dispatch({
                type: actionTypes.ADD_FETCHED_DATA,
                payload: data
            });
        })
        .catch(error => {
            throw (error);
        })
}