const express = require("express");

const router = express.Router()
module.exports = router

router.use('/person', require('./person'))
router.use('/donor', require('./donor'))

router.get('/', (req, res) => {
    res.send({
      status: true,
    })
  })
