import { combineReducers } from 'redux';
import { posts, error } from './reducer';
import {ApplicationState} from '../typescript/interfaces'

const rootReducer =
  combineReducers <ApplicationState >({
    posts,
    error,
  });

export default rootReducer;
