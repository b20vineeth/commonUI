import { combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { galleryReducer } from "./reducer";
import { commonReducer } from "./commonReducer";

export default combineReducers({  galleryReducer, commonReducer,form:formReducer });