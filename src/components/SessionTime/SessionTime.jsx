import { useState } from 'react';

function SessionTime() {
  const [time, setTime] = useState(25);

  const decrementTime = () => {
    setTime((prevTime) => prevTime - 1);
  };

  return (
    <div>
      <div id="session-label">Session Time</div>
      <button onClick={decrementTime} id="session-decrement" type="button">
        -
      </button>
      <span id="session-length">{time}</span>
      <button id="session-increment" type="button">
        +
      </button>
    </div>
  );
}

export default SessionTime;
