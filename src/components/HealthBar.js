import React from 'react';
import { connect } from 'react-redux';

const HealthBar = props => {
  const { health, money, time } = props;

  return (
    <div className="ui segment">
      <div className="ui horizontal list">
        <div className="ui label red">
          <i className="icon heart" />
	  {health}
          <div className="detail">Health</div>
        </div>
        <div className="ui label green">
          <i className="icon money" />
	  {money}
          <div className="detail">Money</div>
        </div>
        <div className="ui label teal">
          <i className="icon clock" />
	  {time}
          <div className="detail">Time</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.statsReducer,
  };
};

export default connect(mapStateToProps)(HealthBar);
