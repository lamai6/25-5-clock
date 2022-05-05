import { Component } from 'react';
import TimeControl from '../TimeControl/TimeControl';
import Display from '../Display/Display';
import Time from '../Time/Time';
import Audio from '../Audio/Audio';
import './Pomodoro.styles.scss';

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
    this.setTime = this.setTime.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
    this.runOrPauseTimer = this.runOrPauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.switchActiveTime = this.switchActiveTime.bind(this);
  }

  setTime(timeType, time) {
    const timeState = `${timeType}Time`;
    this.setState(() => ({ [timeState]: time }));
  }

  decrementTime() {
    const { activeTime } = this.state;
    const timeState = `${activeTime}Time`;
    this.setState(
      ({ [timeState]: time }) => ({
        [timeState]: time - 1,
      }),
      () => {
        const { [timeState]: time } = this.state;
        if (time < 0) this.switchActiveTime();
      }
    );
  }

  runOrPauseTimer() {
    this.setState(({ shouldRunning }) => ({ shouldRunning: !shouldRunning }));
  }

  resetTimer() {
    this.setState(({ resetTimer }) => ({ resetTimer: !resetTimer }));
    const { activeTime, shouldRunning } = this.state;
    if (activeTime === 'break') this.switchActiveTime();
    if (shouldRunning) this.runOrPauseTimer();
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
      <div id="container">
        <h1>25 + 5 Clock</h1>
        <Time
          defaultTime={300} // 5 minutes = 300 seconds
          timeName="break"
          shouldRunning={shouldRunning}
          shouldResetTimer={resetTimer}
          setTime={this.setTime}
          decrementTimer={this.decrementTime}
          activeTime={activeTime}
        />
        <Time
          defaultTime={1500} // 25 minutes = 1500 seconds
          timeName="session"
          shouldRunning={shouldRunning}
          shouldResetTimer={resetTimer}
          setTime={this.setTime}
          decrementTimer={this.decrementTime}
          activeTime={activeTime}
        />
        <Display time={time} activeTime={activeTime} />
        <TimeControl
          runOrPauseTimer={this.runOrPauseTimer}
          resetTimer={this.resetTimer}
          shouldRunning={shouldRunning}
        />
        <Audio
          activeTime={activeTime}
          shouldRunning={shouldRunning}
          shouldResetTimer={resetTimer}
        />
      </div>
    );
  }
}

export default Pomodoro;
