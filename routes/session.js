const express = require('express');
const router = express.Router();
const { createSession } = require('../controllers/session');
const { authenticateUser } = require('../controllers/authenticate');

// all routes are localhost:3000/session/...

router.post('/', async (req, res, next) => {
    try {
        const result = await createSession(req,res,next);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to authenticate:', err);
        res.status(401).json({ message: err.toString() });
    }
});

router.get('/', async (req, res, next) => {
    try {
        await authenticateUser( req.user.email, req.user.password );
        res.status(200).json(req.user);
        return req.user;
    } catch (err) {
        console.error('User Not Authenticated:', err);
        res.status(500).json({ message: err.toString() });
    }
});

module.exports = router;