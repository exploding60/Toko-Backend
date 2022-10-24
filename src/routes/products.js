const express = require('express')
const router = express.Router()
const {productController} = require('./../controller/products')
const {checkInsertPR} = require('./../middleware/checkProducts')
const {checkUpdatePR} = require('./../middleware/checkProducts')
router.get('/',productController.getProduct)
router.post('/',checkInsertPR,productController.insert)
router.put('/:id',checkUpdatePR,productController.update)
router.delete('/:id',productController.delete)
router.get('/searchID=:id',productController.search)
router.get('/search=:name',productController.searchName)
router.get('/sort',productController.sorting)


module.exports = router