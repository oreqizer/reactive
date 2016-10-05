const path = require('path');

const base = require('./webpack.base');

module.exports = Object.assign({}, base, {
  output: {
    path: path.join(__dirname, '.tmp'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
});
