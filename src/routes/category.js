const express = require('express')
const router = express.Router()
const {categoryController} = require('./../controller/category')
const {validateCategory} = require('./../helpers/validateStock')

router.get('/',categoryController.getCategory)
router.post('/',validateCategory,categoryController.insert)
router.put('/:id',validateCategory,categoryController.update)
router.delete('/:id',categoryController.delete)
router.get('/searchID=:id',categoryController.search)
router.get('/search=:name',categoryController.searchName)

module.exports = router