import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeObj from '../store';
import './App.css';
import Board from "../scenes/Board/BoardContainer";
import GameHistory from "../scenes/GameHistory/GameHistoryContainer";

const { store, persistor } = storeObj;

class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <div className="app">
            <Board />
            <GameHistory/>
          </div>
        </PersistGate>
      </StoreProvider>
    );
  }
}


export default App;
