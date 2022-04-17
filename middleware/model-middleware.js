const User = require('../models/user');
const Allocation = require('../models/allocation');
const Spot = require('../models/spots');

const createModelsMiddleware = async (req, res, next) => {
    req.models = {
        user: User,
        allocation: Allocation,
        spot: Spot
    }
    next();
}

module.exports = {
    createModelsMiddleware,
}