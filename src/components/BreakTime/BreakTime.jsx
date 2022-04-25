import { useState } from 'react';

function BreakTime() {
  const [time] = useState(5);

  return (
    <div>
      <div id="break-label">Break Time</div>
      <button id="break-decrement" type="button">
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
