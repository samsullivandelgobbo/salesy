const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventoryController')
const Vehicle = require('../models/vehicleModel')
const uploadMW = require('../middleware/multer')
const userAuth = require('../middleware/userAuth')

router.post('/addvehicle', userAuth.Auth, uploadMW.array('file[]'), inventoryController.addNew)

router.post('/update/sold', userAuth.Auth, inventoryController.updateSoldState)
router.post('/update/stocknum', userAuth.Auth, inventoryController.updateStockNum)
router.post('/update/price', userAuth.Auth, inventoryController.updatePrice)
router.post('/update/customer', userAuth.Auth, inventoryController.updateCustomer)
//* Add location service */
router.post('/update/location', userAuth.Auth, inventoryController.updateSoldState)

router.get('/', inventoryController.loadAll)

router.get('/multiple', inventoryController.findByMultiple)
router.get('/year/:id', inventoryController.findByYear)
router.get('/price/:id', inventoryController.findByPrice)
router.get('/make/:id', inventoryController.findByMake)
router.get('/model/:id', inventoryController.findByModel)
router.get('/stocknum/:id', inventoryController.findByStockNum)
router.get('/location/:id', inventoryController.findByLocation)

router.delete('/', userAuth.Auth, inventoryController.deleteOne)

module.exports = router