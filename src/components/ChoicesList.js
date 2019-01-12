import React from 'react';
import { connect } from 'react-redux';
import { triggerChoice } from '../actions';

const ChoicesList = props => {
  function onSelectChoice (choice) {
    // rename these to make more sense
    props.triggerChoice(choice);
    props.selectChoice();
  };

  const renderChoice = (choice, index) => (
    <div className="ui column" key={index}>
      <button
        className="ui column labeled icon button circular"
	onClick={() => onSelectChoice(choice)}>
        <i className="right arrow icon" />
        {choice.text}
      </button>
    </div>
  );

  return (
    <div className="ui three grid equal width">
      {props.choices.map((choice, index) => renderChoice(choice, index))}
    </div>
  );
};

export default connect(
  null,
  { triggerChoice },
)(ChoicesList);
