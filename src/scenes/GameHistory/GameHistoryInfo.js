import React from 'react';
import styled from "styled-components";

const StyledHistoryInfoDiv = styled.div`
  margin-bottom: 60px;
`;

const StyledGameNumberDiv = styled.div`
  margin-bottom:10px;
  font-size: 22px;
  font-weight: bold;
`;

const StyledResultDiv = styled.div`
  margin-bottom:10px;
  font-size: 22px;
`;


const GameHistoryInfo = ({gameNumber, result, children}) => (
  <StyledHistoryInfoDiv className="info">
    <StyledGameNumberDiv>Partida Numero {gameNumber}</StyledGameNumberDiv>
    <StyledResultDiv> {result} </StyledResultDiv>
    {children}
  </StyledHistoryInfoDiv>
);

export default GameHistoryInfo;