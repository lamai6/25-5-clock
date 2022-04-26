import { useState } from 'react';

function BreakTime() {
  const [time, setTime] = useState(5);

  const decrementTime = () => {
    if (time > 1) setTime((prevTime) => prevTime - 1);
  };

  const incrementTime = () => {
    if (time < 60) setTime((prevTime) => prevTime + 1);
  };

  return (
    <div>
      <div id="break-label">Break Time</div>
      <button onClick={decrementTime} id="break-decrement" type="button">
        -
      </button>
      <span id="break-length">{time}</span>
      <button onClick={incrementTime} id="break-increment" type="button">
        +
      </button>
    </div>
  );
}

export default BreakTime;
