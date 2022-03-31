import { combineReducers } from "redux";
import todosReducer from './toDosReducer';

const reducers = combineReducers({
    todos: todosReducer
});

export default reducers  