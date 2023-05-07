import { combineReducers } from "redux";
import ReducerGoogle from "./ReducerApi";

const rootReducer = combineReducers({
  userReducer: ReducerGoogle,
});

export default rootReducer;
