import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from './Index';
import Home from './Home/Home';
import ReduxChat from './Chat/ReduxChat';
import MobxChat from './Chat/MobxChat';

const routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Home} />
    <Route path="reduxchat(/:name)" component={ReduxChat} />
    <Route path="mobxchat(/:name)" component={MobxChat} />
  </Route>
);

export default routes;
