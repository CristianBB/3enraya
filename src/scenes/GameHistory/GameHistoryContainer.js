import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameHistory from './GameHistory';
import { historyGameHistorySelector } from '../../store';

const mapStateToProps = state => ({
  history: historyGameHistorySelector(state),
});

class GameHistoryContainer extends Component {

  render() {
    const {history} = this.props;

    return <GameHistory history={history}/>;
  }
}

export default connect(mapStateToProps)(GameHistoryContainer);
