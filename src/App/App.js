import React, { Component } from 'react';
import './App.css';
import Board from "../scenes/Board/Board";
import BoardButton from "../scenes/Board/BoardButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Indicador de partida finalizada
      gameOver: false,
      // Historial de partidas
      gameHistory: [],
      // Array de 2 dimensiones para representar las celdas
      boxes: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      // Indicador del proximo jugador en mover
      nextPlayer: 'X'
    };
  }

  // Agrega el resultado al histórico de partidas con el estado final del tablero
  gameOver(result) {
    const gameHistory = this.state.gameHistory.slice();
    const boxes = this.state.boxes.slice();

    const gameResult = {
      result: result,
      boxes: boxes
    };

    this.setState({
      gameOver: true,
      gameHistory: gameHistory.concat(gameResult),
    });
  }

  // Reinicia estado del tablero
  resetGame(result) {
    this.setState({
      // Indicador de partida finalizada
      gameOver: false,
      // Array de 2 dimensiones para representar las celdas
      boxes: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      // Indicador del proximo jugador en mover
      nextPlayer: 'X',
    });
  }

  handleClick(row, column) {
    const boxes = this.state.boxes.slice();
    const gameOver = this.state.gameOver;
    // Valida que la casilla no haya sido usada previamente y que el juego no haya terminado
    if (boxes[row][column] || gameOver === true) {
      return;
    }

    const nextPlayer = this.state.nextPlayer;
    boxes[row][column] = nextPlayer;

    this.setState({
      boxes: boxes,
      nextPlayer: nextPlayer === 'X' ? 'O': 'X',
    });

    // Comprueba si, tras el último movimiento, hay un ganador o un empate
    const winner = checkWinner(boxes);
    if (winner) {
      this.gameOver(`Gana jugador ${winner}`);
    } else if (!checkLeftMoves(boxes)) {
      this.gameOver('Empate');
    }
  }

  render() {
    const boxes = this.state.boxes;
    const nextPlayer = this.state.nextPlayer;
    const gameOver = this.state.gameOver;

    let info;
    if (gameOver) {
      const gameResult = this.state.gameHistory[this.state.gameHistory.length - 1];
      info = gameResult.result;
    } else {
      info = `Turno del jugador: ${nextPlayer}`;
    }

    return (
      <div className="app">
        <Board
          boxes={boxes}
          onClick={(row, column) => this.handleClick(row, column)}
        />

        <div className="info"> {info} </div>
        {gameOver &&
          <BoardButton value="Reiniciar Partida" onClick={() => this.resetGame()}/>
        }

      </div>
    );
  }
}


// Comprueba desde la ultima fila y columna pulsada si se trata de un movimiento ganador
function checkWinner(boxes) {

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
function checkLeftMoves(boxes) {

  for (let row = 0; row < boxes.length; row++) {
    let [col0, col1, col2] = boxes[row];

    if (col0 === null || col1 === null || col2 === null) {
      return true;
    }
  }

  return false;
}


export default App;
