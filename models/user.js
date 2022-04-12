const knex = require('../database/knex');
const bcrypt = require('bcrypt');

const USER_TABLE = 'users';

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

const authenticateUser = async (email, password) => {
    const users = await findUserByEmail(email);
    if (users.length === 0) {
        console.error(`Email doesn't match`);
        return false;
    }
    const validPassword = await bcrypt.compare(password, users[0].password);
    if (validPassword) {
        return true;
    }
    return false;
}


module.exports = {
    createNewUser,
    findUserByEmail,
    authenticateUser
};