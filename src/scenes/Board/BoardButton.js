import React from 'react';

const BoardButton = ({value, onClick}) => (
  <button className="resetGame" onClick={() => onClick()}>{value}</button>
)

export default BoardButton;