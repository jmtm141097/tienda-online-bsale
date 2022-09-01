const express = require('express')
const router = express.Router()

router.use('/products', require('./src/routes/product.routes'))
router.use('/categories', require('./src/routes/category.routes'))

module.exports = router
