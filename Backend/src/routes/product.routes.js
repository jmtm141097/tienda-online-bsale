const { Router } = require('express')
const { productsByCategory, allProducts } = require('../controllers/product.controller')
const router = Router()

router.get('/:idCategory', productsByCategory)
router.get('/', allProducts)

module.exports = router
