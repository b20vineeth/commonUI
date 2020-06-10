import { combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { movieReducer } from "./reducer";
import { commonReducer } from "./commonReducer";

export default combineReducers({  movieReducer, commonReducer,form:formReducer });