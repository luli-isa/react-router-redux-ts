import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from 'history/createBrowserHistory'
import { createLogger } from "redux-logger";
//import _ from "underscore";
import rootReducer from './reducers/index';
//import { StoreState } from './types/index';

export const history = createHistory()

const routingMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger();
const arrayMid = [routingMiddleware, loggerMiddleware];
//const mid = _.without(arrayMid, null);

const store = createStore(rootReducer, applyMiddleware(...arrayMid));


export default store;
