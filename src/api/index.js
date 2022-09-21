const express = require("express");
const DonorController = require("../ctrl/donor")
const personCtrl = require("../ctrl/person")
const router = express.Router();

// Donor
router.get("/donor", DonorController.searchDonor);

// Person
router.post("/person", personCtrl.createPerson);

module.exports = router;
