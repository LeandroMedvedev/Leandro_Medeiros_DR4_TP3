import { Component } from 'react';

import styles from './style.module.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount() {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className={styles.container}>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.resetCount}>Reset</button>
        <h2>COUNT: {this.state.count}</h2>
      </div>
    );
  }
}

export default Counter;
