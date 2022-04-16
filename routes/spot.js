const express = require('express');
const router = express.Router();
const User = require('../models/user');

// all routes are localhost:3000/user/...

router.get('/', async (req,res,next) => {
  try {
    const user = await req.models.user.findUserByEmail( req.body.email );
    res.status(201).json('user: ', user);
  } catch (err) {
    console.error('Failed to login:', err);
    res.status(500).json({ message: err.toString() });
  }
});

router.get('/current', async (req, res, next) => {
  try {
      const user = req.user;
      const result = await User.findUserByEmail(user.email);
      res.status(201).json(result);
  } catch (err) {
      console.error('Failed to load current user:', err);
      res.sendStatus(500).json({ message: err.toString() });
  }
});

module.exports = router;