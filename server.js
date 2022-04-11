const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/health', (req, res, next) => {
  const resBody = { status: 'up', port };
  res.json(resBody);
  next();
});

app.use('/*', routes);
routes(app);

app.listen(port, () => {
  console.log(`This app is listening on port https://localhost:${port}`);
});