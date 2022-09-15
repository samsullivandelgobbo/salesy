const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventoryController')
const Vehicle = require('../models/vehicleModel')
const uploadMW = require('../middleware/multer')

router.post('/updatebyid', inventoryController.updateOne)
router.get('/', inventoryController.loadAll)
router.post('/', inventoryController.addNew)
router.post('/vehicleimages', uploadMW.array('file[]'), inventoryController.addPhoto)

// function (req, res, next) {
//   console.log(req.body)
//   console.log(req.body.files)
//   console.log(req.files)
//   console.log(req.file)
// })
// router.post('/vehicleimages', inventoryController.addPhoto)



module.exports = router