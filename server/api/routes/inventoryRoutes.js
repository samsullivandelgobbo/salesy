const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventoryController')
const Vehicle = require('../models/vehicleModel')
const uploadMW = require('../middleware/multer')

router.post('/addvehicle', uploadMW.array('file[]'), inventoryController.addNew)

router.post('/update/sold', inventoryController.updateSoldState)
router.post('/update/stocknum', inventoryController.updateStockNum)
router.post('/update/price', inventoryController.updatePrice)
router.post('/update/customer', inventoryController.updateCustomer)
//* Add location service */
router.post('/update/location', inventoryController.updateSoldState)

router.get('/', inventoryController.loadAll)
router.get('/year/:id', inventoryController.findByYear)
router.get('/price/:id', inventoryController.findByPrice)
router.get('/make/:id', inventoryController.findByMake)
router.get('/model/:id', inventoryController.findByModel)
router.get('/stocknum/:id', inventoryController.findByStockNum)
router.get('/location/:id', inventoryController.findByLocation)

router.delete('/', inventoryController.deleteOne)

module.exports = router