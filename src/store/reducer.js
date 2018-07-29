import { combineReducers } from 'redux';

import { gameReducer } from './game';
import { historyReducer } from './history'

export default combineReducers({
  game: gameReducer,
  history: historyReducer,
});
