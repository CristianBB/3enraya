import React from 'react';
import GameTable from "../../components/GameTable/GameTable";
import GameButton from "./GameButton";
import GameInfo from "./GameInfo";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  left: 40%;
`;

const GameBoard = ({boxes, boxClick, info, gameOver, resetClick}) => (
  <StyledDiv className="game-board">
    <h1> Partida Actual </h1>
    <GameInfo info={info}/>
    <GameTable
      boxes={boxes}
      onClick={(row, column) => boxClick(row, column)}
    />
    {gameOver &&
      <GameButton value="Nueva Partida" onClick={() => resetClick()}/>
    }
  </StyledDiv>

);

export default GameBoard;