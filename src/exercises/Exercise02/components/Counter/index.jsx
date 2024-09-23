import { Component } from 'react';

import styles from './style.module.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  }

  render() {
    return (
      <div className={styles.container}>
        <button onClick={this.incrementCount}>Incrementar</button>
        <h1>CONTADOR: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
