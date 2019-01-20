import React from 'react';
import { connect } from 'react-redux';
import { endGame, resetGame } from '../actions';
import Start from './scenes/Start';
import Step from './scenes/Step';
import End from './scenes/End';

class Game extends React.Component {
  componentDidUpdate() {
    // Check game stats
    const { time, scene } = this.props;
    if (scene === 'reset') {
      this.props.resetGame();
    }

    // Make sure we're not already in game over
    if (time <= 0 && scene === "playing") {
      this.props.endGame('endTime');
    }
  }

  render () {
    if (this.props.scene === 'end') {
      return <End />;
    } else if (this.props.scene === 'playing') {
      return <Step />;
    } else {
      return <Start />;
    }
  }
};

const mapStateToProps = state => {
  const { scene } = state.sceneReducer;
  const { health, time, money } = state.statsReducer;

  return {
    scene,
    health,
    time,
    money,
  };
};

export default connect(mapStateToProps, {
  endGame,
  resetGame,
})(Game);
