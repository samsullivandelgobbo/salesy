const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventoryController')
const Vehicle = require('../models/vehicleModel')
const uploadMW = require('../middleware/multer')

router.post('/updatebyid', inventoryController.updateOne)
router.post('/', inventoryController.addNew)
router.post('/vehicleimages', uploadMW.array('file[]'), inventoryController.addPhoto)
router.delete('/', inventoryController.deleteOne)

router.get('/', inventoryController.loadAll)
router.get('/:id', inventoryController.getOne)

module.exports = router