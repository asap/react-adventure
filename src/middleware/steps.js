import { INIT_GAME } from '../actions/types';
import { initSteps } from '../actions';

import steps from '../data/steps.json';

const stepsMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if(action.type !== INIT_GAME) return;
  // should dispatch steps

  // Dispatch initial steps
  dispatch(initSteps(steps));

  // Should read steps from data and dispatch
  // Should init/load steps on reset
  // maybe should progress to next step
};

export default stepsMiddleware
