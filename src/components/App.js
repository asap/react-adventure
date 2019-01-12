import React from 'react';
import { connect } from 'react-redux';
import { nextStep } from '../actions';
import ChoicesList from './ChoicesList';
import HealthBar from './HealthBar';

const App = props => {
  const onSelectChoice = () => {
    props.nextStep(props.currentStep);
  }

  const maybeRenderChoicesList = () => {
    const { choices } = props.step;
    if (choices) {
      return (
        <div className="ui segment">
          <ChoicesList
            choices={choices}
	    selectChoice={() => onSelectChoice()}
          />
        </div>
      );
    }
  };
  return (
    <div className="ui container">
      <div className="ui menu">
        <div className="item">Home</div>
      </div>
      <HealthBar stats={props.stats}/>
      <h1 className="ui header">{props.step.header}</h1>
      <div className="ui small image">
        <img alt="cage" src="http://www.placecage.com/300/300" />
      </div>
      <div className="ui segment">
        <p>{props.step.notification}</p>
      </div>
      <div className="ui message">
        <div className="header">{props.step.messageHeader}</div>
        <p>{props.step.message}</p>
      </div>
      {maybeRenderChoicesList()}
    </div>
  );
};

const mapStateToProps = state => {
  const { currentStep, steps } = state.stepsReducer;

  return {
    currentStep,
    step: steps[currentStep],
  };
};

export default connect(
  mapStateToProps,
  { nextStep },
)(App);
