import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function SessionTime({
  setTime,
  decrementTime,
  shouldRunning,
  toggleTimerRunning,
  shouldResetTimer,
}) {
  const defaultTime = 1500; // 25 minutes = 1500 seconds
  const [sessionTime, useSessionTime] = useState(defaultTime);
  const [intervalId, setIntervalId] = useState('');

  const decrementSessionTime = () => {
    if (sessionTime > 60) {
      useSessionTime(sessionTime - 60);
    }
  };

  const incrementSessionTime = () => {
    if (sessionTime < 3600) {
      useSessionTime(sessionTime + 60);
    }
  };

  useEffect(() => {
    setTime(sessionTime);
  }, [sessionTime]);

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
    if (shouldRunning) runTimer();
    else clearTimer();
    // return clearTimer();
  }, [shouldRunning]);

  const resetTimer = () => {
    clearTimer();
    useSessionTime(defaultTime);
    if (sessionTime === defaultTime) setTime(defaultTime);
    if (shouldRunning) toggleTimerRunning();
  };

  useEffect(() => {
    resetTimer();
  }, [shouldResetTimer]);

  return (
    <div>
      <div id="session-label">Session Time</div>
      <button
        onClick={decrementSessionTime}
        id="session-decrement"
        type="button"
      >
        -
      </button>
      <span id="session-length">{sessionTime / 60}</span>
      <button
        onClick={incrementSessionTime}
        id="session-increment"
        type="button"
      >
        +
      </button>
    </div>
  );
}

SessionTime.propTypes = {
  setTime: PropTypes.func.isRequired,
  decrementTime: PropTypes.func.isRequired,
  shouldRunning: PropTypes.bool.isRequired,
  toggleTimerRunning: PropTypes.func.isRequired,
  shouldResetTimer: PropTypes.bool.isRequired,
};

export default SessionTime;
