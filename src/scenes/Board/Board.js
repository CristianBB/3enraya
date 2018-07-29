import React from 'react';
import GameTable from "../../components/GameTable/GameTable";
import BoardButton from "./BoardButton";

const Board = ({boxes, boxClick, info, gameOver, resetClick}) => (

  <div className="board">
    <GameTable
      boxes={boxes}
      onClick={(row, column) => boxClick(row, column)}
    />
    <div className="info">{info} </div>
    {gameOver &&
      <BoardButton value="Nueva Partida" onClick={() => resetClick()}/>
    }
  </div>

);

export default Board;