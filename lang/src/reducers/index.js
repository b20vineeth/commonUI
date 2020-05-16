import { combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { loginReducer } from "./reducer";
import { commonReducer } from "./commonReducer";

export default combineReducers({  loginReducer, commonReducer,form:formReducer });