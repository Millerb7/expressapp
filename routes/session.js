const express = require('express');
const router = express.Router();

// all routes are localhost:3000/session/...

router.post('/', async (req, res, next) => {
    try {
        const result = await req.models.user.authentication( req.body.email, req.body.password );
        if(result) {
            res.status(201).json(result);
        } else {
            res.status(400).json('');
        }
        
    } catch (err) {
        console.error('Failed to authenticate:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', (req, res, next) => {
    try {

        if(1) {
            const user = req.models.user.findUserByEmail()
        }
    } catch (err) {
        console.error('User Not Authenticated:', err);
        res.status(500).json({ message: err.toString() });
    }
});

module.exports = router;