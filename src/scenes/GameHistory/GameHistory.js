import React, {Component} from 'react';
import GameTable from "../../components/GameTable/GameTable";

class GameHistory extends Component {

  render() {
    const history = this.props.history;

    return (
      <div className="game-history">
        {history.map((gameResult, resultIndex) => (
          <div key={resultIndex} className="history-row">
            Partida Numero {resultIndex}
            <div className="result">{gameResult.result} </div>
            <GameTable boxes={gameResult.boxes}/>
          </div>
        ))}
      </div>
    );
  }
}

export default GameHistory;