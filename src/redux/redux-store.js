import { combineReducers, createStore } from "redux";
import { mainPageReducer } from "./mainPageReducer";


const redusers = combineReducers({
    mainPage : mainPageReducer
});

const store = createStore(redusers);
window.store = store;
export default store;
