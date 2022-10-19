const express = require('express')
const router = express.Router()
const {productController} = require('./../controller/products')

router.get('/',productController.getProduct)
router.post('/',productController.insert)
router.put('/:id',productController.update)
router.delete('/:id',productController.delete)
router.get('/searchID=:id',productController.search)
router.get('/search=:name',productController.searchName)
router.get('/sort',productController.sorting)


module.exports = router