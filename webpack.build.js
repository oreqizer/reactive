import { join } from 'path';

import base from './webpack.base';

export default {
  ...base,
  output: {
    path: join(__dirname, 'dist/static'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'cheap-source-map',
};
