import path from 'path';
import express from 'express';

import reactApp from './reactApp';

const app = express();

// serve assets not processed by Webpack
app.use(express.static(path.join(__dirname, '../static')));

// setup react middleware
app.use(reactApp);

app.listen(3000, () => process.stdout.write('[server] listening at port 3000\n'));
