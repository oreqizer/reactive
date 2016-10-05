import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';

import webpackConfig from './webpack.dev';

import reactApp from './src/server/reactApp';

const app = express();

const compiler = webpack(webpackConfig);

// serve assets not processed by Webpack
app.use(express.static(path.join(__dirname, 'src/client')));

// enables recompilation
app.use(webpackDev(compiler, {
  noInfo: true,
}));

// setup react middleware
app.use(reactApp);

app.listen(8080, () => process.stdout.write('[devserver] listening at port 8080\n'));
