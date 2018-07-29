import React from 'react';
import GameTable from "../../components/GameTable/GameTable";
import styled from "styled-components";
import GameHistoryInfo from "./GameHistoryInfo";

const StyledHistoryDiv = styled.div`
  position: relative;
  left: 40%;
`;

const GameHistory = ({history}) => (

  <StyledHistoryDiv className="game-history">
    <h1> Histórico de Partidas </h1>
    {history.map((gameResult, resultIndex) => (
      <GameHistoryInfo
        key={resultIndex}
        gameNumber={resultIndex}
        result={gameResult.result}
        children={<GameTable boxes={gameResult.boxes}/>}
      />
    ))}
  </StyledHistoryDiv>
);

export default GameHistory;