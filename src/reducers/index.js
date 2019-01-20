import { combineReducers } from 'redux';
import sceneReducer from './sceneReducer';
import statsReducer from './statsReducer';
import stepsReducer from './stepsReducer';

export default combineReducers({
  sceneReducer,
  statsReducer,
  stepsReducer,
});

