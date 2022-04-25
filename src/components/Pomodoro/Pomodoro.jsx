import { Component } from 'react';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button id="break-decrement" type="button">
          -
        </button>
        <div id="break-label">Break Time</div>
        <button id="session-decrement" type="button">
          -
        </button>
        <div id="session-label">Session Time</div>
      </div>
    );
  }
}

export default Pomodoro;
