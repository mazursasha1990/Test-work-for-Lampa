import { combineReducers } from "redux";

import fetchReducer from "./Shopping/fetching-reducer";
import shoppingReducer from "./Shopping/shopping-reducer";

const rootReducer = combineReducers({
    fetchProducts: fetchReducer,
    shop: shoppingReducer,
});

export default rootReducer;