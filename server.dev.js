import { join } from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';

import webpackConfig from './webpack.dev';

import index from './src/server';

const app = express();

const compiler = webpack(webpackConfig);

// serve assets not processed by Webpack
app.use(express.static(join(__dirname, '../../.tmp/static')));

// enables recompilation
app.use(webpackDev(compiler, {
  noInfo: true,
}));

// setup react middleware
app.use(index);

app.listen(8080, () => console.log(`[devserver] listening at port 8080`));
