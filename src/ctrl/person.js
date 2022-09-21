const knex = require('../lib/knex')('claret')
const ctrl = {}
module.exports = ctrl

ctrl.createPerson = async (req, res) => {
    try {
      console.log('yay req', req.body)
      let rows = await knex('site') // import and use
      let queryFromReq = await req.$db('telType') // use from request
      // console.log('knex', rows)
      //util
      await req.$util.promiseForEach(queryFromReq, async row => {
        let { id, idx, productPrice, ...data } = row
        console.log('=>', row.id)
      })
      // insert update delete
      
      res.send({
        status: true,
        data: rows,
        message: 'yay res',
      })
    } catch (err) {
      console.error(err)
    }
  }
