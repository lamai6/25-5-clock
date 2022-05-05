import { Component } from 'react';
import Pomodoro from '../Pomodoro/Pomodoro';
import './App.styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    localStorage.setItem('project_selector', '25-5-clock');
    localStorage.setItem('fCC_25-5-clock_hide', 'true');
  }

  render() {
    return <Pomodoro />;
  }
}

export default App;
