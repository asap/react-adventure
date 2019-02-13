import { INIT_STEPS, NEXT_STEP, RESET_GAME } from '../actions/types';

const INITIAL_STATE = {
  currentStep: '',
  steps: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_STEPS:
      return {
        ...state,
        steps: action.payload.steps,
        currentStep: action.payload.currentStep,
      };
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
