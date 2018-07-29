import React from 'react';
import {Button} from 'rebass';
import styled from "styled-components";

const StyledButton = styled(Button)`
  width:300px;
  height: 60px;
  margin-top: 5px;
  font-size: 25px;
`;

const GameButton = ({value, onClick}) => (
  <StyledButton className="resetGame" onClick={() => onClick()}>{value}</StyledButton>
)

export default GameButton;