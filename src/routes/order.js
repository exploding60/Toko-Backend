const express = require('express')
const router = express.Router()
const {orderController} = require('./../controller/order')

router.get('/',orderController.getProduct)
router.post('/',orderController.insert)
router.put('/:id',orderController.update)
router.delete('/:id',orderController.delete)
router.get('/searchID=:id',orderController.search)


module.exports = router