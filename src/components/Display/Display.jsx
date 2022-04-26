function Display({ minute, second }) {
  const secondFormatted = second < 10 ? `0${second}` : second;
  const time = `${minute}:${secondFormatted}`;

  return (
    <div>
      <span id="timer-label">Session</span>
      <span id="time-left">{time}</span>
    </div>
  );
}

export default Display;
