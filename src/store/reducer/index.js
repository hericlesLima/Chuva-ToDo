import { combineReducers } from "redux";
import toDosReducer from './toDosReducer';

const reducers = combineReducers({
    toDos: toDosReducer
});

export default reducers  