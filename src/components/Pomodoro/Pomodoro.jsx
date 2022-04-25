import { Component } from 'react';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="break-label">Break Time</div>
        <div id="session-label">Session Time</div>
      </div>
    );
  }
}

export default Pomodoro;
