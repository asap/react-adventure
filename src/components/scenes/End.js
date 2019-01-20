import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../../actions';

const End = props => {
  const { selectedEnding } = props;
  return (
    <div className="ui vertical masthead center aligned segment">
      <div className="ui container text">
        <h1 className="ui header">{selectedEnding.header} </h1>
        <h2 className="ui header">{selectedEnding.message} </h2>
        <button
          className="ui button huge primary"
          onClick={() => props.resetGame()}>
          Restart?
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { ending, endings } = state.sceneReducer;

  return {
    selectedEnding: endings[ending],
  };
};

export default connect(
  mapStateToProps,
  {
    resetGame,
  },
)(End);
