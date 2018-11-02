import React from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';

const Counters = ({ counters, onDelete, onIncrement, onReset }) => (
  <div>
    <button onClick={onReset} type="button" className="btn btn-primary btn-sm m-2">
      Reset
    </button>
    {counters.map(counter => (
      <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} />
    ))}
  </div>
);

Counters.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  counters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Counters;
