import { applyMiddleware, combineReducers, createStore } from "redux";
import { mainPageReducer } from "./mainPageReducer";

import thunk from "redux-thunk";

const redusers = combineReducers({
    mainPage : mainPageReducer
});

const store = createStore(redusers,applyMiddleware(thunk));
window.store = store;
export default store;
