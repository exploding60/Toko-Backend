const express = require('express')
const router = express.Router()
const {categoryController} = require('./../controller/category')
const {checkInsertCT} = require('./../middleware/checkCategory')
const {checkUpdateCT} = require('./../middleware/checkCategory')

router.get('/',categoryController.getCategory)
router.post('/',checkInsertCT,categoryController.insert)
router.put('/:id',checkUpdateCT,categoryController.update)
router.delete('/:id',categoryController.delete)
router.get('/searchID=:id',categoryController.search)
router.get('/search=:name',categoryController.searchName)

module.exports = router