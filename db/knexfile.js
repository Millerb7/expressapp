// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    debug: true,
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : 'root',
      insecureAuth: true,
      database : 'parking'
    }
  }
};
