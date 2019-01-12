import { TRIGGER_CHOICE } from '../actions/types';

const INITIAL_STATE = {
  health: 99,
  money: 50,
  time: 60,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRIGGER_CHOICE:
      const { health, money, time } = action.payload.penalty;
      return {
        ...state,
        health: state.health + health || state.health,
        money: state.money + money || state.money,
        time: state.time + time || state.time,
      };
    default:
      return state;
  }
};
