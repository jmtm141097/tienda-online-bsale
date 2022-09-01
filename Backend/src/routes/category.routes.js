const { Router } = require('express')
const { allCategories } = require('../controllers/category.controller')
const router = Router()

router.get('/', allCategories)

module.exports = router
