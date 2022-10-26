const express = require('express')
const router = express.Router()
const {productController} = require('./../controller/products')
const {validateStock} = require('./../helpers/validateStock')

router.get('/sorting',productController.sorting)
router.get('/',productController.getProduct)
router.post('/',validateStock,productController.insert)
router.put('/:id',validateStock,productController.update)
router.delete('/:id',productController.delete)
router.get('/searchID=:id',productController.search)
router.get('/search=:name',productController.searchName)
// router.get('/',productController.sort)


module.exports = router