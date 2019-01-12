import { NEXT_STEP, TRIGGER_CHOICE } from './types';

// TODO: add:
// UPDATE_HEALTH
// UPDATE_MONEY
// UPDATE_TIME
// UPDATE_STATS

export const triggerChoice = choice => {
  console.log("trigger choice", choice);
  // TODO: this should alter stats?
  // TODO: Add notification thingie too
  return { type: TRIGGER_CHOICE, payload: choice };
};

export const nextStep = currentStep => {
  return { type: NEXT_STEP, payload: currentStep };
};
