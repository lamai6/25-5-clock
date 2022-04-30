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
      breakTime: 0,
      activeTime: 'session',
      shouldRunning: false,
      resetTimer: true,
    };
    this.setSessionTime = this.setSessionTime.bind(this);
    this.decrementSessionTime = this.decrementSessionTime.bind(this);
    this.setBreakTime = this.setBreakTime.bind(this);
    this.decrementBreakTime = this.decrementBreakTime.bind(this);
    this.toggleTimerRunning = this.toggleTimerRunning.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.switchActiveTime = this.switchActiveTime.bind(this);
  }

  setBreakTime(breakTime) {
    this.setState(() => ({ breakTime }));
  }

  setSessionTime(sessionTime) {
    this.setState(() => ({ sessionTime }));
  }

  decrementBreakTime() {
    this.setState(
      ({ breakTime }) => {
        if (breakTime >= 0) return { breakTime: breakTime - 1 };
        return null;
      },
      () => {
        const { breakTime } = this.state;
        if (breakTime < 0) this.switchActiveTime();
      }
    );
  }

  decrementSessionTime() {
    this.setState(
      ({ sessionTime }) => {
        if (sessionTime >= 0) return { sessionTime: sessionTime - 1 };
        return null;
      },
      () => {
        const { sessionTime } = this.state;
        if (sessionTime < 0) this.switchActiveTime();
      }
    );
  }

  toggleTimerRunning() {
    this.setState(({ shouldRunning }) => ({ shouldRunning: !shouldRunning }));
  }

  resetTimer() {
    this.setState(({ resetTimer }) => ({ resetTimer: !resetTimer }));
  }

  switchActiveTime() {
    this.setState(({ activeTime }) =>
      activeTime === 'session'
        ? { activeTime: 'break' }
        : { activeTime: 'session' }
    );
  }

  render() {
    const { sessionTime, breakTime, shouldRunning, resetTimer, activeTime } =
      this.state;
    const time = activeTime === 'session' ? sessionTime : breakTime;
    return (
      <div>
        <BreakTime
          shouldRunning={shouldRunning}
          toggleTimerRunning={this.toggleTimerRunning}
          shouldResetTimer={resetTimer}
          setTime={this.setBreakTime}
          decrementTime={this.decrementBreakTime}
          activeTime={activeTime}
        />
        <SessionTime
          shouldRunning={shouldRunning}
          toggleTimerRunning={this.toggleTimerRunning}
          shouldResetTimer={resetTimer}
          setTime={this.setSessionTime}
          decrementTime={this.decrementSessionTime}
          activeTime={activeTime}
        />
        <Display time={time} activeTime={activeTime} />
        <TimeControl
          toggleTimerRunning={this.toggleTimerRunning}
          resetTimer={this.resetTimer}
        />
      </div>
    );
  }
}

export default Pomodoro;
