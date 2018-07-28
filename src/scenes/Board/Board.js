import React, {Component} from 'react';
import {Box} from "../../components";

class Board extends Component {

  // Renderizado de fila
  renderRow(row) {
    return (
      <div className="board-row">
        {this.renderBox(row, 0)}
        {this.renderBox(row, 1)}
        {this.renderBox(row, 2)}
      </div>
    );
  }

  // Renderizado de columna
  renderBox(row, column) {
    return (
      <Box
        value={this.props.boxes[row][column]}
        onClick={() => this.props.onClick(row, column)}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderRow(0)}
        {this.renderRow(1)}
        {this.renderRow(2)}
      </div>
    );
  }
}

export default Board;