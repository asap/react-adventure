import { NEXT_STEP, RESET_GAME } from '../actions/types';

// TODO: Should this be in actions?
import steps from '../data/steps.json';

const INITIAL_STATE = {
  currentStep: 'start',
  steps,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return { ...state, currentStep: action.payload };
    case RESET_GAME:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};
