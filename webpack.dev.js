import { join } from 'path';

import base from './webpack.base';

export default {
  ...base,
  output: {
    path: join(__dirname, '.tmp/static'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
};
