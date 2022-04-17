const express = require('express');
const router = express.Router();
const spotController = require('../controllers/spot');
const { loggerMiddleware } = require('../middleware/logger');

// all routes are localhost:3000/spots...

router.get('/', loggerMiddleware, async (req,res,next) => {
  try {
    const spots = await spotController.querySpots(req,res,next);
    res.status(200).json(spots);
  } catch (err) {
    console.error('Failed to login:', err);
    res.status(500).json({ message: err.toString() });
  }
});

module.exports = router;