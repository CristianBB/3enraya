import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import localforage from 'localforage';
import rootReducer from './reducer';

export {
  gameSetGameState,
  gameSetGameOver,
  gameSetMove,
  historyAdd
} from './actions';

export {
  gameSelector,
  gameGameOverSelector,
  gameBoxesSelector,
  gameNextPlayerSelector,
  historySelector,
  historyGameHistorySelector
} from './selectors';

const persistConfig = {
  key: 'root',
  storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistor = persistStore(store);

export default {
  store,
  persistor,
};
