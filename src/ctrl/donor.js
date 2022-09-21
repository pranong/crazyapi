const knex = require('../lib/knex')('claret')
class DonorController {
  async searchDonor(req, res) {
    try {
      console.log('Pass', req.body)
      let rows = await knex('site')
      console.log('knex', rows)
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
