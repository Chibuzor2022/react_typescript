import React, { Component } from 'react';



// Here we define props and state interfaces
interface CounterProps {}

interface CounterState {
  count: number;
}
// Here we extend Component with both props and state types

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };
// Here we Use arrow function to preserve 'this' context
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}  style={{
          color: 'green',
          backgroundColor: '#fcfcfc',
          fontSize: '20px',
        fontWeight: 'bold',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '12px 16px',
      }}>Increment</button>
      </div>
    );
  }
}

export default Counter;
