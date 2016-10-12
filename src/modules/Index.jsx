import React, { PropTypes } from 'react';
import { Link, locationShape } from 'react-router';
import classnames from 'classnames';

const Index = props => (
  <div id="Index">
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Reactive
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={classnames({ active: props.location.pathname.includes('/chat') })}>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>
    </nav>
    <div id="App" className="container-fluid">
      {props.children}
    </div>
  </div>
);

Index.propTypes = {
  children: PropTypes.node.isRequired,
  location: locationShape.isRequired,
};

export default Index;
