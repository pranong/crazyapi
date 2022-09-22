const express = require('express')
const donorCtrl = require('../ctrl/donor')

const router = express.Router()
module.exports = router

router.get('/donor', donorCtrl.searchDonor)