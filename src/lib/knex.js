const knex = require('knex')
const knexfile = require('./knexfile')
// console.log('process.env.NODE_ENV', process.env.NODE_ENV)
const db = knex(knexfile.office)
module.exports = db
