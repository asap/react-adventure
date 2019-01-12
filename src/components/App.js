import React from 'react';
import { connect } from 'react-redux';
import { nextStep } from '../actions';

const App = props => {
  return (
    <div className="ui container">
      <div className="ui menu">
        <div className="item">Home</div>
      </div>
      <h1 className="ui header">Step {props.currentStep}: Venenatis Vulputate Ultricies</h1>
      <div className="ui small image">
        <img alt="cage" src="http://www.placecage.com/300/300" />
      </div>
      <div className="ui segment">
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </div>
      <div className="ui message">
        <div className="header">Quam Condimentum Dapibus</div>
        <p>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia
          bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et.
        </p>
      </div>
    <button className="ui right floated labeled icon button circular" onClick={() => props.nextStep(props.currentStep)}>
        <i className="right arrow icon" />Next
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentStep: state.stepsReducer.currentStep };
};

export default connect(
  mapStateToProps,
  { nextStep },
)(App);
