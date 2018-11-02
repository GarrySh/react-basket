import React, { Component } from 'react';
import NavBar from './navbar';
import Counters from './counters';

export default class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 2 }, { id: 3, value: 0 }],
  };

  handleIncrement = counter => {
    this.setState(state => {
      const counters = [...state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter, value: counter.value + 1 };
      return { counters };
    });
  };

  handleDelete = id => {
    const { counters } = this.state;
    this.setState({ counters: counters.filter(item => item.id !== id) });
  };

  handleReset = () => {
    this.setState(state => {
      const counters = state.counters.map(counter => ({ ...counter, value: 0 }));
      return { counters };
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(counter => counter.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}
