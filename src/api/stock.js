const express = require('express')
const stockCtrl = require('../ctrl/stock')

const router = express.Router()
module.exports = router

router.get('/get-stock', stockCtrl.getStock)