import React from 'react';
import {connect } from 'react-redux';
import { startGame } from '../../actions';

const Start = props => {
  return (
    <div className="ui vertical masthead center aligned segment">
      <div className="ui container text">
        <h1 className="ui header">React Adventure</h1>
        <h2>A day in the life of a React Developer</h2>
        <button className="ui button huge primary" onClick={() => props.startGame()}>Start Game</button>
      </div>
    </div>
  );
};

export default connect(null, {
  startGame,
})(Start);
