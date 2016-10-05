import webpack from 'webpack';

const loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    babelrc: false,
    presets: ['react', ['es2015', { modules: false }], 'stage-3'],
  },
}];

const plugins = [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
  }),
];

export default {
  context: __dirname,
  entry: ['src/client/index.js'],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders,
  },
  plugins,
};
