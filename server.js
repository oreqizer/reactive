const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const html = fs.readFileSync(path.join(__dirname, 'dist/index.html'));

// serve assets not processed by Webpack
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.end(html);
});

app.listen(3000, () => process.stdout.write('[server] listening at port 3000\n'));
