import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Index = props => (
  <div id="Index">
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Reactive
        </Link>
      </div>
    </nav>
    <div id="App" className="container-fluid">
      {props.children}
    </div>
  </div>
);

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
