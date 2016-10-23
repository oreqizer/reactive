/* eslint-disable no-underscore-dangle */
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './reducers';

const historyMiddleware = routerMiddleware(browserHistory);
const loggerMiddleware = createLogger({
  collapsed: true,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {}, // we have no initial state
  composeEnhancers(applyMiddleware(
    historyMiddleware,
    loggerMiddleware,
    reduxThunk,
  )),
);

export default store;
