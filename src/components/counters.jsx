import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 10 },
      { id: 5, value: 10 },
    ],
  };

  handleDelete = () => {
    console.log('delete handle');
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        {counters.map(counter => (
          <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} selected />
        ))}
      </div>
    );
  }
}
