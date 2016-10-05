import path from 'path';
import express from 'express';

import index from './app';

const app = express();

// serve assets not processed by Webpack
app.use(express.static(path.join(__dirname, '../static')));

// setup react middleware
app.use(index);

app.listen(3000, () => process.stdout.write('[server] listening at port 3000\n'));
