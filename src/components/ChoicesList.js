import React from 'react';

const ChoicesList = props => {
  const renderChoice = (choice, index) => (
    <div className="ui column" key={index}>
      <button className="ui column labeled icon button circular" onClick={()=> props.onSelectChoice()}>
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

export default ChoicesList;
