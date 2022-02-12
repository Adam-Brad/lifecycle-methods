import React, {Component} from 'react';
import './App.css';

interface CounterState {
  count: number;
  isActive: boolean;
  lifeCycle: string;
}

class App extends Component<Record<string, never>, CounterState> {
  constructor(props: any) {
    super(props);
    this.state = {count: 0, isActive: false, lifeCycle: ''};
  }

  componentDidMount() {
    console.log('Component did mount')
    this.setState({count: 2, lifeCycle: 'Component did Mount'})
  };

  componentDidUpdate(prevProps: Readonly<Record<string, never>>, prevState: Readonly<CounterState>, snapshot?: any) {
    if (prevState.count !== this.state.count) {
      console.log('count has changed');
    }
    if (prevState.isActive !== this.state.isActive) {
      console.log('isActive has changed');
    }
    if (prevState.isActive !== this.state.isActive || prevState.count !== this.state.count) {
      console.log('a prop has changed');
    }
    if (this.state.isActive === true && this.state.count > 7) {
      console.log('Lift off');
      this.setState({lifeCycle: 'Lift off'})
    }
  };

  handleCountUpdate() {
    this.setState({count: this.state.count + 1})
  };

  handleStatusUpdate() {
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <button onClick={() => this.handleCountUpdate()}>Click to increment count</button>
        <div>Current Number: {this.state.count}</div>
        <button onClick={() => this.handleStatusUpdate()}>Click to toggle status</button>
        <div>Current status: {String(this.state.isActive)}</div>
        <div>Last lifecycle method: {this.state.lifeCycle}</div>
      </div>
    );
  }
}

export default App;
