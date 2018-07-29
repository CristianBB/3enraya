import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-weight: bold;
  line-height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  font-size: 42px;
  width: 100px;
  height: 100px;

  &:focus {
    outline: none;
  }
`;

const Box = ({value, onClick, textStyle}) => (
  <StyledButton className="box" style={textStyle} onClick={onClick ? () => onClick() : null}>{value}</StyledButton>
);

export default Box;