import React, {Component} from 'react';
import GameTable from "../../components/GameTable/GameTable";

class Board extends Component {

  render() {
    return (
      <div className="board">
        <GameTable
          boxes={this.props.boxes}
          onBoxClicked={(row, column) => this.props.onClick(row, column)}
        />
        <div className="info">{this.props.info} </div>
      </div>
    );
  }
}

export default Board;