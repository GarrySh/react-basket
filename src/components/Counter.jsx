import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Counter extends Component {
  getBadgeClasses() {
    const { value } = this.props.counter;
    return classNames('badge', 'm-2', {
      'badge-primary': value !== 0,
      'badge-secondary': value === 0,
    });
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          type="submit"
          className="btn btn-second btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  counter: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default Counter;
