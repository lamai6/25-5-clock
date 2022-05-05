import PropTypes from 'prop-types';
import './Display.styles.scss';

function Display({ time, activeTime }) {
  const minute = Math.floor(time / 60);
  const second = time % 60;
  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  const formattedSecond = second < 10 ? `0${second}` : second;

  return (
    <div id="timer-container">
      <div id="timer">
        <span id="timer-label">
          {`${activeTime[0].toUpperCase()}${activeTime.slice(1)}`}
        </span>
        <span id="time-left">{`${formattedMinute}:${formattedSecond}`}</span>
      </div>
    </div>
  );
}

Display.propTypes = {
  time: PropTypes.number.isRequired,
  activeTime: PropTypes.string.isRequired,
};

export default Display;
