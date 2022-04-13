// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'admin',
      password : 'root',
      insecureAuth: true,
      database : 'parking'
    }
  }
};
