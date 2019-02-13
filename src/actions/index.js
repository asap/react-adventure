import {
  NEXT_STEP,
  START_GAME,
  END_GAME,
  RESET_GAME,
  TRIGGER_CHOICE,
  INIT_GAME,
  INIT_STEPS,
} from './types';

export const startGame = scene => {
  return { type: START_GAME };
};

export const endGame = (ending = 'end') => {
  return { type: END_GAME, payload: ending };
};

export const triggerChoice = choice => {
  return { type: TRIGGER_CHOICE, payload: choice };
};

export const nextStep = currentStep => {
  return { type: NEXT_STEP, payload: currentStep };
};

export const resetGame = () => {
  return { type: RESET_GAME };
};

export const initGame = () => {
  return { type: INIT_GAME };
};

export const initSteps = steps => {
  return { type: INIT_STEPS, payload: { steps, currentStep: 'start' } };
};
