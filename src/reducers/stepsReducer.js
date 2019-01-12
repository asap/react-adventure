import { NEXT_STEP } from '../actions/types';

// TODO: Should this be in actions?
import steps from '../data/steps.json';

const INITIAL_STATE = {
  currentStep: 0,
  steps,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return { ...state, currentStep: action.payload+1 };
    default:
      return state;
  }
};
