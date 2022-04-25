import { Component } from 'react';
import Pomodoro from '../Pomodoro/Pomodoro';
import './App.styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Pomodoro />;
  }
}

export default App;
