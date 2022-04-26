import { useState } from 'react';

function SessionTime() {
  const [time, setTime] = useState(25);

  const decrementTime = () => {
    if (time > 1) setTime((prevTime) => prevTime - 1);
  };

  const incrementTime = () => {
    setTime((prevTime) => prevTime + 1);
  };

  return (
    <div>
      <div id="session-label">Session Time</div>
      <button onClick={decrementTime} id="session-decrement" type="button">
        -
      </button>
      <span id="session-length">{time}</span>
      <button onClick={incrementTime} id="session-increment" type="button">
        +
      </button>
    </div>
  );
}

export default SessionTime;
