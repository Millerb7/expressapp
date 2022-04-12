const express = require('express');
const bodyParser = require('body-parser');
const { createModelsMiddleware } = require('./middleware/model-middleware');

const userRoutes = require('./routes/user');
const sessionRoutes = require('./routes/session');

const app = express();
const port = 3000;

app.use(createModelsMiddleware);
app.use(bodyParser.json());

app.get('/health', (req, res, next) => {
  const resBody = { status: 'up', port };
  res.json(resBody);
  next();
});

app.use('/user', userRoutes);
app.use('/session', sessionRoutes);

app.listen(port, () => {
  console.log(`This app is listening on port https://localhost:${port}`);
});