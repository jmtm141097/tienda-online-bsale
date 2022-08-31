const { Router } = require('express')
const { findProductByID,allProducts } = require('../controllers/product.controller')
const router = Router()

router.get('/:id', findProductByID)
router.get('/', allProducts)

module.exports = router
