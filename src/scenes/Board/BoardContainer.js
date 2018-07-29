import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board';
import {
  gameGameOverSelector,
  gameNextPlayerSelector,
  gameBoxesSelector,
  historyGameHistorySelector,
  gameSetMove as gameSetMoveACT,
  gameSetGameOver as gameSetGameOverACT,
  gameSetGameState as gameSetGameStateACT,
  historyAdd as historyAddACT,
} from '../../store';

const mapStateToProps = state => ({
  gameOver: gameGameOverSelector(state),
  nextPlayer: gameNextPlayerSelector(state),
  boxes: gameBoxesSelector(state),
  history: historyGameHistorySelector(state),
});

const mapDispatchToProps = {
  setMove: gameSetMoveACT,
  setGameOver: gameSetGameOverACT,
  setGameState: gameSetGameStateACT,
  historyAdd: historyAddACT,
};


class BoardContainer extends Component {
  // Click en casilla
  handleClick(row, column) {
    const {gameOver, nextPlayer, boxes, setMove} = this.props;

    // Valida que la casilla no haya sido usada previamente y que el juego no haya terminado
    if (boxes[row][column] || gameOver === true) {
      return;
    }

    boxes[row][column] = nextPlayer;

    setMove({
      boxes: boxes,
      nextPlayer: nextPlayer === 'X' ? 'O': 'X',
    });

    // Comprueba si, tras el último movimiento, hay un ganador o un empate
    const winner = BoardContainer.checkWinner(boxes);
    if (winner) {
      this.gameOver(`Gana jugador ${winner}`);
    } else if (!BoardContainer.checkLeftMoves(boxes)) {
      this.gameOver('Empate');
    }
  }

  // Reinicia estado del tablero
  resetGame() {
    const {setGameState} = this.props;

    const boxes = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const nextPlayer = 'X';

    setGameState({
      gameOver: false,
      boxes: boxes,
      nextPlayer: nextPlayer,
    });
  }

  // Agrega el resultado al histórico de partidas con el estado final del tablero
  gameOver(result) {
    const {history, historyAdd, boxes, setGameOver} = this.props;

    // Actualiza estado de partida actual
    setGameOver({
      gameOver: true,
    });

    // Añade el resultado de la partida al historico de partidas
    const gameResult = {
      result: result,
      boxes: boxes.slice(),
    };
    historyAdd({gameHistory: history.concat(gameResult)});
  }


  // Comprueba desde la ultima fila y columna pulsada si se trata de un movimiento ganador
  static checkWinner(boxes) {
    const winChances = [
      // Misma Linea
      [{row: 0, column: 0}, {row: 0, column: 1}, {row: 0, column: 2}],
      [{row: 1, column: 0}, {row: 1, column: 1}, {row: 1, column: 2}],
      [{row: 2, column: 0}, {row: 2, column: 1}, {row: 2, column: 2}],
      // Misma Columna
      [{row: 0, column: 0}, {row: 1, column: 0}, {row: 2, column: 0}],
      [{row: 0, column: 1}, {row: 1, column: 1}, {row: 2, column: 1}],
      [{row: 0, column: 2}, {row: 1, column: 2}, {row: 2, column: 2}],
      // Misma Diagonal
      [{row: 0, column: 0}, {row: 1, column: 1}, {row: 2, column: 2}],
      [{row: 0, column: 2}, {row: 1, column: 1}, {row: 2, column: 0}]
    ];

    for (let i = 0; i < winChances.length; i++) {
      const chance = winChances[i];

      if (boxes[chance[0].row][chance[0].column] !== null &&
        boxes[chance[0].row][chance[0].column] === boxes[chance[1].row][chance[1].column] &&
        boxes[chance[0].row][chance[0].column] === boxes[chance[2].row][chance[2].column]) {

        return boxes[chance[0].row][chance[0].column];
      }
    }

    return null;
  }

  // Comprueba si quedan movimientos
  static checkLeftMoves(boxes) {

    for (let row = 0; row < boxes.length; row++) {
      let [col0, col1, col2] = boxes[row];

      if (col0 === null || col1 === null || col2 === null) {
        return true;
      }
    }

    return false;
  }

  render() {
    const {boxes, gameOver, nextPlayer, history} = this.props;

    let info;
    if (gameOver) {
      const gameResult = history[history.length - 1];
      info = gameResult.result;
    } else {
      info = `Turno del jugador: ${nextPlayer}`;
    }

    return <Board
      boxes={boxes}
      boxClick={(row, column) => this.handleClick(row, column)}
      gameOver={gameOver}
      resetClick={() => this.resetGame()}
      info={info}
    />;
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardContainer);
