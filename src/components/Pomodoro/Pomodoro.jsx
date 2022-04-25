import { Component } from 'react';
import BreakTime from '../BreakTime/BreakTime';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BreakTime />
        <div id="session-label">Session Time</div>
        <button id="session-decrement" type="button">
          -
        </button>
        <button id="session-increment" type="button">
          +
        </button>
      </div>
    );
  }
}

export default Pomodoro;
