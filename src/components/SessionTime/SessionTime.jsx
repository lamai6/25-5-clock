import { useState } from 'react';

function SessionTime() {
  const [time] = useState(25);

  return (
    <div>
      <div id="session-label">Session Time</div>
      <button id="session-decrement" type="button">
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
