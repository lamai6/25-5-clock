import PropTypes from 'prop-types';

function Display({ time }) {
  const minute = Math.floor(time / 60);
  const second = time % 60;
  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  const formattedSecond = second < 10 ? `0${second}` : second;

  return (
    <div>
      <span id="timer-label">Session</span>
      <span id="time-left">{`${formattedMinute}:${formattedSecond}`}</span>
    </div>
  );
}

Display.propTypes = {
  time: PropTypes.number.isRequired,
};

export default Display;
