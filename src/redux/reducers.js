import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import chat from './modules/chatDuck';

export default combineReducers({
  chat,
  routing: routerReducer,
});
