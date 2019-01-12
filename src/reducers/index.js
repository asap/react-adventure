import { combineReducers } from 'redux';
import statsReducer from './statsReducer';
import stepsReducer from './stepsReducer';

export default combineReducers({
  statsReducer,
  stepsReducer,
});

