export const GAME_SET_GAME_STATE = 'GAME/SET_GAME_STATE';
export const GAME_SET_GAMEOVER = 'GAME/SET_GAMEOVER';
export const GAME_SET_MOVE= 'GAME/SET_MOVE';

export const gameSetGameState = payload => ({
  type: GAME_SET_GAME_STATE,
  payload,
});

export const gameSetGameOver = payload => ({
  type: GAME_SET_GAMEOVER,
  payload,
});

export const gameSetMove = payload => ({
  type: GAME_SET_MOVE,
  payload,
});

