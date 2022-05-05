import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRotate } from '@fortawesome/free-solid-svg-icons';
import './TimeControl.styles.scss';

function TimeControl({ runOrPauseTimer, resetTimer, shouldRunning }) {
  const getIcon = () => (shouldRunning ? faPause : faPlay);

  return (
    <div id="time-controls">
      <button onClick={runOrPauseTimer} id="start_stop" type="button">
        <FontAwesomeIcon icon={getIcon()} />
      </button>
      <button onClick={resetTimer} id="reset" type="button">
        <FontAwesomeIcon icon={faRotate} />
      </button>
    </div>
  );
}

TimeControl.propTypes = {
  runOrPauseTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  shouldRunning: PropTypes.bool.isRequired,
};

export default TimeControl;
