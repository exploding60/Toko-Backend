const express = require('express')
const router = express.Router()
const {productController} = require('./../controller/products')
const {validateStock} = require('./../helpers/validateStock')
const { protect,requireAdmin,roleUser } = require("../middleware/auth");
const upload  = require("./../middleware/upload");

router.get('/sorting',productController.sorting)
router.get('/',productController.getProduct)
router.post('/',upload.single('photo'),validateStock,productController.insert)
router.put('/:id',roleUser,validateStock,productController.update)
router.delete('/:id',roleUser,productController.delete)
router.get('/searchID=:id',productController.search)
router.get('/search=:name',productController.searchName)
// router.get('/',productController.sort)


module.exports = router