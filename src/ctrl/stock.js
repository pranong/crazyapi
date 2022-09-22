const knex = require('../lib/knex')('mysql')
const path = require('path')
const dayjs = require('dayjs')
const ctrl = {}
module.exports = ctrl

ctrl.getStock = async (req, res) => {
    try {
      console.log('Pass', req.body)
      let rows = await knex('stock')
      console.log('knex', rows[0].stkId)
      res.send({
        status: 100,
        message: 'Donor Requst',
        items: rows,
      })
    } catch (err) {
      console.error(err)
    }
}
