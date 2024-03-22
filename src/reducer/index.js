import { combineReducers } from "redux";
import { questionItemReducers, selectedReducer } from "./questions.reducers"


const allReducers = combineReducers({
    questionItemReducers,
    selectedReducer
});
export default allReducers;