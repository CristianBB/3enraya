import { HISTORY_ADD } from './actions';

import initialState from './initialState';

const historyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HISTORY_ADD:
      return { ...state, gameHistory: payload.gameHistory };
    default:
      return state;
  }
};

export default historyReducer;
