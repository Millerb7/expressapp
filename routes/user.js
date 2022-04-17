const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// all routes are localhost:3000/user/...

router.get('/', async (req,res,next) => {
  userController.getUser(rew,res,next);
});

router.get('/current', async (req, res, next) => {
  userController.getCurrent(req,res,next); 
});

module.exports = router;