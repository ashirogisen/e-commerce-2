const router = require('express').Router()
const productController = require('../controllers/productController')
const isAdmin = require('../middlewares/isAdmin')
const isLogin = require('../middlewares/isLogin')

router.get('/',productController.getAll)
router.get('/:name', productController.getCardInfo)
router.post('/', productController.create)
router.put('/:id', isLogin, productController.update)
router.delete('/:id', isLogin,  productController.delete)

module.exports = router