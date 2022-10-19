const express = require('express')
const router = express.Router()
const {categoryController} = require('./../controller/category')


router.get('/',categoryController.getCategory)
router.post('/',categoryController.insert)
router.put('/:id',categoryController.update)
router.delete('/:id',categoryController.delete)
router.get('/searchID=:id',categoryController.search)
router.get('/search=:name',categoryController.searchName)

module.exports = router