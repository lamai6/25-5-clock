import PropTypes from 'prop-types';

function TimeControl({ toggleTimerRunning, resetTimer }) {
  return (
    <div>
      <button onClick={toggleTimerRunning} id="start_stop" type="button">
        Start / Stop
      </button>
      <button onClick={resetTimer} id="reset" type="button">
        Reset
      </button>
    </div>
  );
}

TimeControl.propTypes = {
  toggleTimerRunning: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
};

export default TimeControl;
