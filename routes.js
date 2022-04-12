const express = require('express');
const router = express.Router();

router.post('/:username/:password', async (req,res,next) => {
  try {
    console.log(req.params);
    console.log(req.body);
    res.status(201).json('created user');
} catch (err) {
    console.error('Failed create user:', err);
    res.status(500).json({ message: err.toString() });
}
});

router.get('/*', (req, res) => {
  res.status(200).json("Healthy boi");
});

module.exports = router;