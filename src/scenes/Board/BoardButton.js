import React from 'react';

function BoardButton(props) {
  return (
    <button className="resetGame" onClick={() => props.onClick()}>{props.value}</button>
  );
}

export default BoardButton;