const jwt = require('jsonwebtoken');
const User = require('../models/user');

const accessTokenSecret = 'insertmemehere';

const authenticateUser = async (email, password) => {
    const user = await User.authentication(email, password);
    if (user === null) {
        return user;
    }
    const employees = await User.findUserByEmail(email);
    console.log('employees', ...employees);
    const accessToken = jwt.sign({ ...employees[0], claims: ['employee'] }, accessTokenSecret);

    return accessToken;
}

module.exports = {
    authenticateUser
};