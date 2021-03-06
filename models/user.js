const knex = require('../database/knex');
const bcrypt = require('bcrypt');

const USER_TABLE = 'employee';

const createNewUser = async (email, password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const query = knex(USER_TABLE).insert({ email, password: hash });
    const result = await query;
    return result;
};

const findUserByEmail = async (email) => {
    const query = await knex(USER_TABLE).where({ email });
    return query;
}

const authentication = async (email, password) => {
    const users = await findUserByEmail(email);
    if (users.length === 0) {
        console.error(`Email doesn't match`);
        return null;
    }

    const validPassword = await bcrypt.compare(password, users[0].password);
    if (validPassword) {
        return users[0];
    }
    return null;
}

module.exports = {
    createNewUser,
    findUserByEmail,
    authentication
};