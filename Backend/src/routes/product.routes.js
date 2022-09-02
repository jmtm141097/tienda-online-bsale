const { Router } = require('express')
const { productsByCategory, allProducts, productsByName } = require('../controllers/product.controller')
const router = Router()

router.get('/byName', productsByName)
router.get('/', allProducts)
router.get('/:idCategory', productsByCategory)

module.exports = router
