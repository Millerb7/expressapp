const express = require('express');
const router = express.Router();

// all routes are localhost:3000/session/...

router.get('/*', (req, res) => {
  res.status(200).json("Healthy boi");
});

module.exports = router;