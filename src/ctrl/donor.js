const knex = require('../lib/knex')('mysql')
class DonorController {
  async searchDonor(req, res) {
    try {
      console.log('Pass', req.body)
      let rows = await knex('stock')
      console.log('knex', rows[0].stkId)
      res.send({
        status: 100,
        message: 'Donor Requst',
        data: rows,
      })
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = new DonorController()
