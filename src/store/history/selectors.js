import { createSelector } from 'reselect';

export const historySelector = state => state.history;

export const historyGameHistorySelector = createSelector(
  historySelector,
  history => history.gameHistory,
);


