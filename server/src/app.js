console.log('server running...')

// dependencies
// requires main.js file from each package and exports into variables
const express = require('express')
const bodyParser = require('body-parser') // process JSON data
const cors = require('cors')
const morgan = require('morgan')    // prints out logs
const { sequelize } = require('./models')
const config = require('./config/config')

// builds express server
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // Allows any client to access for global hosting (SECURITY RISK)

// connects endpoint (required)
require('./routes')(app)

sequelize.sync().then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})
