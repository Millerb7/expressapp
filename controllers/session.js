const userControl = require('./authenticate');
const { authenticateJWT } = require('../middleware/auth');

const createSession = async (req,res,next) => {
    const result = await userControl.authenticateUser( req.body.email, req.body.password );
    return result;
};

module.exports = {
    createSession
}