const User = require('../models/user');

const getCurrent = async (req,res,next) => {
    try {
        const user = req.user;
        const result = await User.findUserByEmail(user.email);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(401).json({ message: err.toString() });
    }
}

const getUser = async (req,res,next) => {
    try {
        const user = await req.models.user.findUserByEmail( req.body.email );
        res.status(201).json('user: ', user);
      } catch (err) {
        console.error('Failed to find user:', err);
        res.status(401).json({ message: err.toString() });
      }
}

module.exports = {
    getCurrent,
    getUser
}