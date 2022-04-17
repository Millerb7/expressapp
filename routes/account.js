const express = require('express');
const router = express.Router();
const { createNewUser } = require('../controllers/account');

// all routes are localhost:3000/account/...

router.post('/', async (req,res,next) => {
  await createNewUser(req,res,next);
  next();
});

module.exports = router;