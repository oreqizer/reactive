/* eslint-disable react/no-children-prop */
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as MobxProvider } from 'mobx-react';

import store from './redux/store';
import stores from './mobx/stores';

import routes from './modules/routes';

const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
  <ReduxProvider store={store}>
    <MobxProvider {...stores}>
      <Router children={routes} history={history} />
    </MobxProvider>
  </ReduxProvider>
);

export default Root;
