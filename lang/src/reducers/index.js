import { combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { languageReducer } from "./reducer";
import { commonReducer } from "./commonReducer";

export default combineReducers({  languageReducer, commonReducer,form:formReducer });