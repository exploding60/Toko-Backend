const express = require('express')
const router = express.Router()
const {productController} = require('./../controller/order')

router.get('/',productController.getProduct)
router.post('/',productController.insert)
router.put('/:id',productController.update)
router.delete('/:id',productController.delete)
router.get('/searchID=:id',productController.search)
router.get('/search=:name',productController.searchName)


module.exports = router