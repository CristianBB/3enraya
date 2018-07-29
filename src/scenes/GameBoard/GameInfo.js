import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom:10px;
  font-size: 22px;
`;

const GameInfo = ({info}) => (
  <StyledDiv className="info">{info} </StyledDiv>
);

export default GameInfo;