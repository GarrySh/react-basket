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

  handleDelete = id => () => {
    const { counters } = this.state;
    this.setState({ counters: counters.filter(item => item.id !== id) });
    // console.log('delete handle', id);
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        <button type="button" className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter key={counter.id} onDelete={this.handleDelete(counter.id)} counter={counter} />
        ))}
      </div>
    );
  }
}
