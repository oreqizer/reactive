import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from './Index';
import Home from './Home/Home';
import Chat from './Chat/Chat';

const routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Home} />
    <Route path="chat(/:name)" component={Chat} />
  </Route>
);

export default routes;
