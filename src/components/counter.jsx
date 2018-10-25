import React, { Component } from 'react';
import classNames from 'classnames';

export default class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  getBadgeClasses() {
    return classNames('badge', 'm-2', {
      'badge-primary': this.state.count === 0,
      'badge-secondary': !this.state.count !== 0,
    });
  }

  handleIncrement = event => {
    const { target } = event;
    console.log(target);
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 40 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className={'btn btn-second btn-sm'} onClick={this.handleIncrement}>
          Increment
        </button>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }
}
