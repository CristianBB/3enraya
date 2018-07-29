export { default as gameReducer } from './reducer';
export {
  gameSetGameState,
  gameSetGameOver,
  gameSetMove,
} from './actions';
export {
  gameSelector,
  gameGameOverSelector,
  gameBoxesSelector,
  gameNextPlayerSelector,
} from './selectors';
