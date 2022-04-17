const knexConfig = require('../db/knexfile');
const knex = require('knex');

module.exports = knex(knexConfig.development);