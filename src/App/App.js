import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeObj from '../store';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { BrowserRouter, Route } from 'react-router-dom';
import theme from './theme';
import { Main, Header, Content } from '../layout';
import GameBoard from "../scenes/GameBoard/GameBoardContainer";
import GameHistory from "../scenes/GameHistory/GameHistoryContainer";

const { store, persistor } = storeObj;

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const App = () => (
  <StoreProvider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <StyleProvider theme={theme}>
        <BrowserRouter>
          <Main>
            <Header/>
            <Content>
              <Route path="/" exact component={GameBoard}/>
              <Route path="/history" component={GameHistory}/>
            </Content>
          </Main>
        </BrowserRouter>
      </StyleProvider>
    </PersistGate>
  </StoreProvider>
);

export default App;
