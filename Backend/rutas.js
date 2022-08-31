const express = require('express')
const router = express.Router()

router.use('/products', require('./src/routes/product.routes'))

module.exports = router
