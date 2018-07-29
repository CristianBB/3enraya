import React from 'react';

const Box = ({value, onClick}) => (
  <button className="box" onClick={onClick ? () => onClick() : null}>{value}</button>
);

export default Box;