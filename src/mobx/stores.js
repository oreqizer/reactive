import { useStrict } from 'mobx';

import ChatStore from './modules/ChatStore';

useStrict(true);

const stores = {
  chat: new ChatStore(),
};

export default stores;
