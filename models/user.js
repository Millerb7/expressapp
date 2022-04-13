const knex = require('../database/knex');
const bcrypt = require('bcrypt');

const USER_TABLE = 'employee';

const createNewUser = async (email, pass) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(pass, salt);
    const query = knex(USER_TABLE).insert({ email, password: hashed });
    const result = await query;
    return result;
};

const findUserByEmail = async (email) => {
    const query = knex(USER_TABLE).where({ email });
    return await query;
}

const authentication = async (email, password) => {
    const users = await findUserByEmail(email);
    if (users.length === 0) {
        console.error(`Email doesn't match`);
        return 'email doesnt match';
    }
    const validPassword = await bcrypt.compare(password, users[0].password);
    if (validPassword) {
        return users[0];
    }
    return 'password doesn\'t match';
}

module.exports = {
    createNewUser,
    findUserByEmail,
    authentication
};