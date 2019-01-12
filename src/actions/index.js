import {
  NEXT_STEP,
} from './types';

export const nextStep = (currentStep) => {
  return { type: NEXT_STEP, payload: currentStep };
};
