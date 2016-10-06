const fs = require('fs');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');

const webpackConfig = require('./webpack.config');

const app = express();

const compiler = webpack(webpackConfig);

const html = fs.readFileSync(path.join(__dirname, 'src/index.html'));

// enables recompilation
app.use(webpackDev(compiler, {
  noInfo: true,
}));

app.get('/*', (req, res) => {
  res.end(html);
});

// serve assets not processed by Webpack
app.use(express.static(path.join(__dirname, 'src')));

app.listen(8080, () => process.stdout.write('[server.dev] listening at port 8080\n'));
