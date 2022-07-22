const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventoryController')



router.get('/', inventoryController.getAll)
router.post('/', inventoryController.addNew)

module.exports = router