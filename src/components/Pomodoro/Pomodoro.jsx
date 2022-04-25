import { Component } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import SessionTime from '../SessionTime/SessionTime';
import Display from '../Display/Display';

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
        <Display />
      </div>
    );
  }
}

export default Pomodoro;
