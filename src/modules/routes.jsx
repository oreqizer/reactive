import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from './Index';
import Home from './Home/Home';

const routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
