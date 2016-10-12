import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './reducers';

const historyMiddleware = routerMiddleware(browserHistory);
const loggerMiddleware = createLogger({
  collapsed: true,
});

const store = createStore(
  reducers,
  {}, // we have no initial state
  applyMiddleware(
    historyMiddleware,
    loggerMiddleware,
    reduxThunk,
  )
);

export default store;
