import { NEXT_STEP } from '../actions/types';

// TODO: Should this be in actions?
import steps from '../data/steps.json';

const INITIAL_STATE = {
  currentStep: 'start',
  steps,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_STEP:
      console.log("action", action);
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
};
