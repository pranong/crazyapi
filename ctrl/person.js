const personService = require("../service/person");

class PersonController {
  async createPerson(req, res) {
    try {
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
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new PersonController();
