const express = require('express');
const bodyParser = require('body-parser');
const { createModelsMiddleware } = require('./middleware/model-middleware');

const userRoutes = require('./routes/user');
const sessionRoutes = require('./routes/session');
const allocationRoutes = require('./routes/allocation');
const accountRoutes = require('./routes/account');
const spotRoutes = require('./routes/spot');

const { authenticateJWT,authenticateWithClaims } = require('./middleware/auth');

const app = express();
const port = 3000;

app.use(createModelsMiddleware);
app.use(bodyParser.json());

app.get('/health', (req, res, next) => {
  const resBody = { status: 'up', port };
  res.json(resBody);
  next();
});

app.use('/account', accountRoutes);
app.use('/user', authenticateWithClaims(['employee']),  userRoutes);
app.use('/session', sessionRoutes);
app.use('/allocation', authenticateWithClaims(['employee']), allocationRoutes);
app.use('/spots', authenticateWithClaims(['employee']), spotRoutes);

app.listen(port, () => {
  console.log(`This app is listening on port https://localhost:${port}`);
});