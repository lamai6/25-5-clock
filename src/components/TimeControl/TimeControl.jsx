import PropTypes from 'prop-types';

function TimeControl({ toggleTimerRunning }) {
  return (
    <div>
      <button onClick={toggleTimerRunning} id="start_stop" type="button">
        Start / Stop
      </button>
      <button id="reset" type="button">
        Reset
      </button>
    </div>
  );
}

TimeControl.propTypes = {
  toggleTimerRunning: PropTypes.func.isRequired,
};

export default TimeControl;
