import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from '../reducers'
import logger from "redux-logger";
import thunkMiddleWare from 'redux-thunk'
 
export const store = applyMiddleware(thunkMiddleWare)(window.devToolsExtension
             ? window.devToolsExtension()(createStore)
             : createStore)(reducer); 


//export default createStore(reducer, applyMiddleware(loggerMiddleWare, thunkMiddleWare));