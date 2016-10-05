const path = require('path');
const express = require('express');

const app = express();

// serve assets not processed by Webpack
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, () => process.stdout.write('[server] listening at port 3000\n'));
