import { combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reviewReducer } from "./reducer";
import { commonReducer } from "./commonReducer";

export default combineReducers({  reviewReducer, commonReducer,form:formReducer });