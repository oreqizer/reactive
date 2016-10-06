import React, { PropTypes } from 'react';

const Index = props => (
  <div>
    Index<br />
    Route: {props.route.path}
  </div>
);

Index.propTypes = {
  route: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Index;
