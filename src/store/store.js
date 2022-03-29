import { applyMiddleware, createStore } from "redux";
import reducers from "./reducer/index";
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk]; //npm install redux-thunk

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);  