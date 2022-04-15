const express = require('express');
const router = express.Router();

// all routes are localhost:3000/user/...

router.post('/', async (req,res,next) => {
  try {
    const user = await req.models.user.createNewUser( req.body.email, req.body.password );
    res.status(201).json('created user: '+ user);
} catch (err) {
    console.error('Failed create user:', err);
    res.status(500).json({ message: err.toString() });
}

  next();
});

router.get('/login', async (req,res,next) => {
  try {
    res.status(201).json('login');
  } catch (err) {
    console.error('Failed to login:', err);
    res.status(500).json({ message: err.toString() });
  }
});

router.get('/', async (req,res,next) => {
  try {
    const user = await req.models.user.findUserByEmail( req.body.email );
    res.status(201).json('user: ', user);
  } catch (err) {
    console.error('Failed to login:', err);
    res.status(500).json({ message: err.toString() });
  }
});

module.exports = router;