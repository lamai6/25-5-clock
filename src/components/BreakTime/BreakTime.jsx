import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function BreakTime({
  setTime,
  decrementTime,
  shouldRunning,
  toggleTimerRunning,
  shouldResetTimer,
  activeTime,
}) {
  const defaultTime = 300; // 5 minutes = 300 seconds
  const timeName = 'break';
  const [breakTime, useBreakTime] = useState(defaultTime);
  const [intervalId, setIntervalId] = useState('');

  const decrementBreakTime = () => {
    if (breakTime > 60) {
      useBreakTime(breakTime - 60);
    }
  };

  const incrementBreakTime = () => {
    if (breakTime < 3600) {
      useBreakTime(breakTime + 60);
    }
  };

  useEffect(() => {
    if (timeName === activeTime) setTime(breakTime);
  }, [breakTime]);

  const runTimer = () => {
    const newIntervalId = setInterval(() => {
      decrementTime();
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
    setTime(breakTime);
    if (shouldRunning) {
      if (timeName !== activeTime) {
        clearTimer();
      } else runTimer();
    }
  }, [activeTime]);

  const resetTimer = () => {
    clearTimer();
    useBreakTime(defaultTime);
    if (breakTime === defaultTime) setTime(defaultTime);
    if (shouldRunning) toggleTimerRunning();
  };

  useEffect(() => {
    if (timeName === activeTime) resetTimer();
  }, [shouldResetTimer]);

  return (
    <div>
      <div id="break-label">Break Time</div>
      <button onClick={decrementBreakTime} id="break-decrement" type="button">
        -
      </button>
      <span id="break-length">{breakTime / 60}</span>
      <button onClick={incrementBreakTime} id="break-increment" type="button">
        +
      </button>
    </div>
  );
}

BreakTime.propTypes = {
  setTime: PropTypes.func.isRequired,
  decrementTime: PropTypes.func.isRequired,
  shouldRunning: PropTypes.bool.isRequired,
  toggleTimerRunning: PropTypes.func.isRequired,
  shouldResetTimer: PropTypes.bool.isRequired,
  activeTime: PropTypes.string.isRequired,
};

export default BreakTime;
