import { Component } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import SessionTime from '../SessionTime/SessionTime';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BreakTime />
        <SessionTime />
      </div>
    );
  }
}

export default Pomodoro;
