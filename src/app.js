const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {
  sequelize
} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
  })
