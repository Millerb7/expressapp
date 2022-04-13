const User = require('../models/user');
const Allocation = require('../models/allocation');

const createModelsMiddleware = async (req, res, next) => {
    req.models = {
        user: User,
        allocation: Allocation
    }
    next();
}

module.exports = {
    createModelsMiddleware,
}