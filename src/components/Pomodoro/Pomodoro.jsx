import { Component } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import SessionTime from '../SessionTime/SessionTime';
import TimeControl from '../TimeControl/TimeControl';
import Display from '../Display/Display';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 0,
      shouldRunning: false,
      resetTimer: true,
    };
    this.setSessionTime = this.setSessionTime.bind(this);
    this.decrementSessionTime = this.decrementSessionTime.bind(this);
    this.toggleTimerRunning = this.toggleTimerRunning.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  setSessionTime(sessionTime) {
    this.setState(() => ({ sessionTime }));
  }

  decrementSessionTime() {
    this.setState(({ sessionTime }) => ({ sessionTime: sessionTime - 1 }));
  }

  toggleTimerRunning() {
    this.setState(({ shouldRunning }) => ({ shouldRunning: !shouldRunning }));
  }

  resetTimer() {
    this.setState(({ resetTimer }) => ({ resetTimer: !resetTimer }));
  }

  render() {
    const { sessionTime, shouldRunning, resetTimer } = this.state;
    return (
      <div>
        <BreakTime />
        <SessionTime
          shouldRunning={shouldRunning}
          toggleTimerRunning={this.toggleTimerRunning}
          shouldResetTimer={resetTimer}
          setTime={this.setSessionTime}
          decrementTime={this.decrementSessionTime}
        />
        <Display time={sessionTime} />
        <TimeControl
          toggleTimerRunning={this.toggleTimerRunning}
          resetTimer={this.resetTimer}
        />
      </div>
    );
  }
}

export default Pomodoro;
