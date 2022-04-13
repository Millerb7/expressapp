const express = require('express');
const router = express.Router();
const userControl = require('../controllers/authenticate');
const authenticator = require('../middleware/auth');

// all routes are localhost:3000/session/...

router.post('/', async (req, res, next) => {
    try {
        const result = await userControl.authenticateUser( req.body.email, req.body.password );
        if(result) {
            res.status(201).json(result);
        } else {
            res.status(400).json('user is not authinticated');
        }
        
    } catch (err) {
        console.error('Failed to authenticate:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', (req, res, next) => {
    try {
        authenticator.authenticateJWT( req, res, next );
        res.status(200).json('user authenticated:', req.user);
        return req.user;
    } catch (err) {
        console.error('User Not Authenticated:', err);
        res.status(500).json({ message: err.toString() });
    }
});

module.exports = router;