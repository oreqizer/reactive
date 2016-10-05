const webpack = require('webpack');

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
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
  }),
];

module.exports = {
  context: __dirname,
  entry: ['./src/client/index'],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders,
  },
  plugins,
};
