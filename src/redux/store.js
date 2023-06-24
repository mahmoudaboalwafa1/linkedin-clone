import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import ReducerGoogle from "./reducer/ReducerGoogle";

const store = createStore(ReducerGoogle, applyMiddleware(thunk));

export default store;
