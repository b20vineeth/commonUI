import { combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { videoReducer } from "./reducer";
import { commonReducer } from "./commonReducer";

export default combineReducers({  videoReducer, commonReducer,form:formReducer });