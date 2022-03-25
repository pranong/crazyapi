// const personService = require("../service/person");

class PersonController {
  async createPerson(req, res) {
    try {
      console.log('yay req', req.body)
      // req.body
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
        message: 'yay res',
      })
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new PersonController();
