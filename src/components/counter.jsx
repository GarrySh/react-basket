import React, { Component } from 'react';
import classNames from 'classnames';

export default class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  getBadgeClasses() {
    const { count } = this.state;
    return classNames('badge', 'm-2', {
      'badge-primary': count !== 0,
      'badge-secondary': count === 0,
    });
  }

  handleIncrement = event => {
    const { target } = event;
    console.log(target);
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  renderTags() {
    const { tags } = this.state;
    if (tags.length === 0) {
      return <p>There are no tags</p>;
    }
    return (
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span style={{ fontSize: 40 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button type="submit" className="btn btn-second btn-sm" onClick={this.handleIncrement}>
          Increment
        </button>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }
}
