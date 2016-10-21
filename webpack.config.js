const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const production = process.env.NODE_ENV === 'production';
const out = production ? 'dist' : '.tmp';

const loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    presets: ['react', ['es2015', { modules: false }], 'stage-2'],
    plugins: ['transform-decorators-legacy'],
  },
}, {
  test: /\.css$/,
  loader: 'style!css',
}, {
  test: /\.scss$/,
  loader: 'style!css!postcss!sass',
}, {
  test: /\.(svg|png|html|eot|ttf|woff2|woff)$/,
  loader: 'file?name=[name].[ext]',
}];

const plugins = [
  new webpack.SourceMapDevToolPlugin(),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
  }),
  new webpack.LoaderOptionsPlugin({
    test: /\.scss$/,
    options: {
      postcss: () => [autoprefixer],
    },
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
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    loaders,
  },
  plugins,
};
