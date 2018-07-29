import { createSelector } from 'reselect';

export const gameSelector = state => state.game;

export const gameGameOverSelector = createSelector(
  gameSelector,
  game => game.gameOver,
);

export const gameBoxesSelector = createSelector(
  gameSelector,
  game => game.boxes,
);

export const gameNextPlayerSelector = createSelector(
  gameSelector,
  game => game.nextPlayer,
);

