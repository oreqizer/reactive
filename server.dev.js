import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';

import webpackConfig from './webpack.config';

const app = express();

const compiler = webpack(webpackConfig);

// enables recompilation
app.use(webpackDev(compiler, {
  noInfo: true,
}));

// serve assets not processed by Webpack
app.use(express.static(path.join(__dirname, 'src')));

app.listen(8080, () => process.stdout.write('[devserver] listening at port 8080\n'));
