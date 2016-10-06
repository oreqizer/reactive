const path = require('path');
const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';
const out = production ? 'dist' : '.tmp';

const loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    babelrc: false,
    presets: ['react', ['es2015', { modules: false }], 'stage-3'],
  },
}, {
  test: /\.html$/,
  loader: 'file?name=[name].[ext]',
}];

const plugins = [
  new webpack.SourceMapDevToolPlugin(),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
  }),
];

module.exports = {
  context: __dirname,
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, out),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders,
  },
  plugins,
};
