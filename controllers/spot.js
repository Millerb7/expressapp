const Spots = require('../models/spots');

const querySpots = async (req,res,next) => {
    if(req.query.available) {
        req.query.available = (req.query.available == 'true') ? true : false;
    }
    const result = await Spots.findSpots(req.query);
    return result;
};

module.exports = {
    querySpots
};