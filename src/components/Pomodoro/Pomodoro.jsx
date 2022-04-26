import { Component } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import SessionTime from '../SessionTime/SessionTime';
import TimeControl from '../TimeControl/TimeControl';
import Display from '../Display/Display';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minute: 25,
      second: 0,
    };
    this.setTime = this.setTime.bind(this);
  }

  setTime(minute, second) {
    this.setState(() => ({ minute, second }));
  }

  render() {
    const { minute, second } = this.state;
    return (
      <div>
        <BreakTime />
        <SessionTime />
        <Display minute={minute} second={second} />
        <TimeControl />
      </div>
    );
  }
}

export default Pomodoro;
