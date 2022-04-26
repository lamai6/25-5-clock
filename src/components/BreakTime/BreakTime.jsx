import { useState } from 'react';

function BreakTime() {
  const [time, setTime] = useState(5);

  const decrementTime = () => {
    setTime((prevTime) => prevTime - 1);
  };

  return (
    <div>
      <div id="break-label">Break Time</div>
      <button onClick={decrementTime} id="break-decrement" type="button">
        -
      </button>
      <span id="break-length">{time}</span>
      <button id="break-increment" type="button">
        +
      </button>
    </div>
  );
}

export default BreakTime;
