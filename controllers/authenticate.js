const jwt = require('jsonwebtoken');
const User = require('../models/user');

const accessTokenSecret = 'insertmemehere';

const authenticateUser = async (email, password) => {
    const user = await User.authentication(email, password);
    if (user === null) {
        return user;
    }
    const accessToken = jwt.sign({ ...user }, accessTokenSecret);

    return accessToken;
}

module.exports = {
    authenticateUser
};