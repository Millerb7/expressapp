const User = require('../models/users');

const createModelsMiddleware = async (req, res, next) => {
    console.log('Creating models in middleware');
    req.models = {
        user: User,
    }
    next();
}

module.exports = {
    createModelsMiddleware,
}