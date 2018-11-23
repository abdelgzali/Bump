// connecting to the DB

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize') // ORM for Node.js to connect to SQL databases
const config = require('../config/config')
const db = {}

//  couple configs defined in  config.js
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// reads all files in models folder and setup for sequelize
// helps import future models
// not index.js
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
