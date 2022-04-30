import { Component } from 'react';
import TimeControl from '../TimeControl/TimeControl';
import Display from '../Display/Display';
import Time from '../Time/Time';

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
      ({ breakTime }) => ({ breakTime: breakTime - 1 }),
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
    const { activeTime, shouldRunning } = this.state;
    if (activeTime === 'break') this.switchActiveTime();
    if (shouldRunning) this.toggleTimerRunning();
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
        <Time
          defaultTime={300} // 5 minutes = 300 seconds
          timeName="break"
          shouldRunning={shouldRunning}
          toggleTimerRunning={this.toggleTimerRunning}
          shouldResetTimer={resetTimer}
          setTime={this.setBreakTime}
          decrementTimer={this.decrementBreakTime}
          activeTime={activeTime}
        />
        <Time
          defaultTime={1500} // 25 minutes = 1500 seconds
          timeName="session"
          shouldRunning={shouldRunning}
          toggleTimerRunning={this.toggleTimerRunning}
          shouldResetTimer={resetTimer}
          setTime={this.setSessionTime}
          decrementTimer={this.decrementSessionTime}
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
