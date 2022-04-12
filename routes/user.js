const express = require('express');
const router = express.Router();

// all routes are localhost:3000/user/...

router.post('/', async (req,res,next) => {
  try {
    const user = await req.models.user.createNewUser( req.body.email, req.body.password );
    res.status(201).json('created user: ', user);
} catch (err) {
    console.error('Failed create user:', err);
    res.status(500).json({ message: err.toString() });
}

  next();
});

router.get('/login', async (req,res,next) => {
  try {
    
  } catch (err) {
    console.error('Failed to login:', err);
    res.status(500).json({ message: err.toString() });
  }
})

router.get('/*', (req, res) => {
  res.status(200).json("Healthy boi");
});

module.exports = router;