import { START_GAME, END_GAME, RESET_GAME } from '../actions/types';

import endings from '../data/endings.json';

const INITIAL_STATE = {
  ending: null,
  scene: 'start',
  endings,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, scene: 'playing' };
    case END_GAME:
      console.log("how do I end?", action);
      return {
        ...state,
        ending: action.payload,
        scene: 'end',
      };
    case RESET_GAME:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
