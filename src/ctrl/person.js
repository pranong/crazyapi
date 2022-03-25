const db = require('../lib/knex')

class PersonController {
  async createPerson(req, res) {
    try {
      console.log('yay req', req.body)
      let rows = await db('site')
      console.log('knex', rows)
      // insert update delete
      //   const [id] = await db("person")
      //     .insert({
      //       email,
      //       first_name: firstName,
      //       last_name: lastName,
      //     })
      //     .returning("id");
      //   return id;
      // res.send
      res.send({
        status: true,
        data: rows,
        message: 'yay res',
      })
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = new PersonController()
