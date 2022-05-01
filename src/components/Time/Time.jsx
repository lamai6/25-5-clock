import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Time({
  timeName,
  defaultTime,
  setTime,
  decrementTimer,
  shouldRunning,
  shouldResetTimer,
  activeTime,
}) {
  const [time, useTime] = useState(defaultTime);
  const [intervalId, setIntervalId] = useState('');

  const decrementTime = () => {
    if (time > 60) {
      useTime(time - 60);
    }
  };

  const incrementTime = () => {
    if (time < 3600) {
      useTime(time + 60);
    }
  };

  useEffect(() => {
    if (timeName === activeTime) setTime(timeName, time);
  }, [time]);

  const runTimer = () => {
    const newIntervalId = setInterval(() => {
      decrementTimer();
    }, 1000);
    setIntervalId(newIntervalId);
  };

  const clearTimer = () => {
    clearInterval(intervalId);
    setIntervalId('');
  };

  useEffect(() => {
    if (timeName === activeTime) {
      if (shouldRunning) runTimer();
      else clearTimer();
    }
    // return clearTimer();
  }, [shouldRunning]);

  useEffect(() => {
    setTime(timeName, time);
    if (shouldRunning) {
      if (timeName !== activeTime) {
        clearTimer();
      } else runTimer();
    }
  }, [activeTime]);

  const resetTimer = () => {
    clearTimer();
    useTime(defaultTime);
    if (time === defaultTime) setTime(timeName, defaultTime);
  };

  useEffect(() => {
    resetTimer();
  }, [shouldResetTimer]);

  return (
    <div>
      <div id={`${timeName}-label`}>
        {`${timeName[0].toUpperCase()}${timeName.slice(1)} Time`}
      </div>
      <button
        onClick={decrementTime}
        id={`${timeName}-decrement`}
        type="button"
      >
        -
      </button>
      <span id={`${timeName}-length`}>{time / 60}</span>
      <button
        onClick={incrementTime}
        id={`${timeName}-increment`}
        type="button"
      >
        +
      </button>
    </div>
  );
}

Time.propTypes = {
  timeName: PropTypes.string.isRequired,
  defaultTime: PropTypes.number.isRequired,
  setTime: PropTypes.func.isRequired,
  decrementTimer: PropTypes.func.isRequired,
  shouldRunning: PropTypes.bool.isRequired,
  shouldResetTimer: PropTypes.bool.isRequired,
  activeTime: PropTypes.string.isRequired,
};

export default Time;
