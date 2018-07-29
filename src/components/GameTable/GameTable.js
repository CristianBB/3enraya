import React from 'react';
import Box from "../Box/Box";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: table;
`;

const textRed = {
  color: 'red'
};

const textBlue = {
  color: 'blue'
}

const GameTable = ({boxes, onClick}) => (

  <StyledDiv>
    {boxes.map((row, rowIndex) => (
      <div key={rowIndex} className="game-row">
        {row.map((column, columnIndex) => (
          <Box
            key={`${rowIndex}-${columnIndex}`}
            value={column}
            onClick={onClick ? () => onClick(rowIndex, columnIndex) : null}
            textStyle={column === 'X' ? textBlue : textRed}
          />
        ))}
      </div>

    ))}
  </StyledDiv>
);

export default GameTable;