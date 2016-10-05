const path = require('path');

const base = require('./webpack.base');

module.exports = Object.assign({}, base, {
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'cheap-source-map',
});
