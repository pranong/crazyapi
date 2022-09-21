const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
// const fs = require('fs')
// const path = require('path')
const http = require('http').createServer(app)
const util = require('./lib/util')
const config = require('./config')
const knex = require('./lib/knex')('claret', config[config.db])


app.use(express.json())
app.use((req, res, next) => {
  req.$db = knex
  req.$util = util
  req.$config = config
  // req.$redis = asyncRedisClient
  next()
})
app.use(cors())
app.use(
  '/api',
  bodyParser.json({ limit: 1024 * 1024 * 1024 }),
  require('./api')
)

// // set port, listen for requests
const PORT = config.port || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
