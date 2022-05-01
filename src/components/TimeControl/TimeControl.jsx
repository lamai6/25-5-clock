import PropTypes from 'prop-types';

function TimeControl({ runOrPauseTimer, resetTimer }) {
  return (
    <div>
      <button onClick={runOrPauseTimer} id="start_stop" type="button">
        Start / Stop
      </button>
      <button onClick={resetTimer} id="reset" type="button">
        Reset
      </button>
    </div>
  );
}

TimeControl.propTypes = {
  runOrPauseTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
};

export default TimeControl;
