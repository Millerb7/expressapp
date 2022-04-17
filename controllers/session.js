const userControl = require('./authenticate');

const createSession = async (req,res,next) => {
    const result = await userControl.authenticateUser( req.body.email, req.body.password );
    return result;
};

module.exports = {
    createSession
}