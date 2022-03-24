const express = require("express");
const personController = require("../ctrl/person");

const router = express.Router();
router.post("/person", personController.createPerson);

module.exports = router;
