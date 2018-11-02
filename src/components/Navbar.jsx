import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ totalCounters }) => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/#">
      Navbar
      {'  '}
      <span className="badge badge-secondary badge-pill">{totalCounters}</span>
    </a>
  </nav>
);

NavBar.propTypes = {
  totalCounters: PropTypes.number.isRequired,
};

export default NavBar;
