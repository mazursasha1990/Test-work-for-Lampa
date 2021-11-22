import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { fetchData } from "./Shopping/shopping-actions";


const saveState = (state) => {
    console.log(state);
    if (state.shop.length !== 0) {
        localStorage.setItem("state", JSON.stringify(state));
    }
}

const getState = () => {
    try {
        const s = localStorage.getItem("state");
        if (s === null) return undefined;
        return JSON.parse(s);
    } catch (e) {
        return undefined;
    }
}

const initialState = getState();
console.log("initialState", initialState);
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(fetchData());



store.subscribe(() => {
    saveState({
        shop: store.getState().shop
    })
    console.log("store", store.getState().shop);
})

export default store;