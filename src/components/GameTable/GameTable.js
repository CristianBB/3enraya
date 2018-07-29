import React from 'react';
import Box from "../Box/Box";

const GameTable = ({boxes, onClick}) => (

  <div className="GameTable">
    {boxes.map((row, rowIndex) => (
      <div key={rowIndex} className="game-row">
        {row.map((column, columnIndex) => (
          <Box
            key={`${rowIndex}-${columnIndex}`}
            value={column}
            onClick={() => onClick(rowIndex, columnIndex)}
          />
        ))}
      </div>

    ))}
  </div>
);

export default GameTable;