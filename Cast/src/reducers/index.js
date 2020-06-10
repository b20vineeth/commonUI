import { combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { profileReducer } from "./reducer";
import { commonReducer } from "./commonReducer";

export default combineReducers({  profileReducer, commonReducer,form:formReducer });