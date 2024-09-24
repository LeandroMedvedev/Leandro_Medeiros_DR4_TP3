import { Component } from 'react';

import styles from './style.module.css';
import DisplayCount from '../DisplayCount';

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
        <DisplayCount count={this.state.count} />
      </div>
    );
  }
}

export default Counter;
