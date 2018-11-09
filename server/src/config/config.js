// definiton for sequelize configs

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'bump',
    user: process.env.DB_USER || 'bump',
    password: process.env.DB_PASS || 'bump',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './bump.sqlite'
    }
  }
}
