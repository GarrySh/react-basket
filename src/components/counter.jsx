import React, { Component } from 'react';
import classNames from 'classnames';

export default class Counter extends Component {
  state = {
    value: this.props.value,
  };

  getBadgeClasses() {
    const { value } = this.state;
    return classNames('badge', 'm-2', {
      'badge-primary': value !== 0,
      'badge-secondary': value === 0,
    });
  }

  handleIncrement = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }

  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button type="submit" className="btn btn-second btn-sm" onClick={this.handleIncrement}>
          Increment
        </button>
        <button type="button" className="btn btn-danger btn-sm m-2" onClick={this.props.onDelete}>
          Delete
        </button>
      </div>
    );
  }
}
