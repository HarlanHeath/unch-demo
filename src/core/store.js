import { createStore, applyMiddleware, combineReducers } from 'redux';
import mainReducer from '../reducer/mainReducer';
import promiseMiddleware from 'redux-promise-middleware';



export default createStore(
    combineReducers({
        mainReducer,
    }),
    applyMiddleware(promiseMiddleware));