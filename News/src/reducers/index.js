import { combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { newsReducer } from "./reducer";
import { commonReducer } from "./commonReducer";

export default combineReducers({  newsReducer, commonReducer,form:formReducer });