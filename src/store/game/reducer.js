import {
  GAME_SET_GAME_STATE,
  GAME_SET_GAMEOVER,
  GAME_SET_MOVE,
} from './actions';

import initialState from './initialState';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SET_GAME_STATE:
      return { ...state, gameOver: payload.gameOver, boxes: payload.boxes, nextPlayer: payload.nextPlayer, };
    case GAME_SET_GAMEOVER:
      return { ...state, gameOver: payload.gameOver };
    case GAME_SET_MOVE:
      return { ...state, boxes: payload.boxes, nextPlayer: payload.nextPlayer };
    default:
      return state;
  }
};

export default gameReducer;
