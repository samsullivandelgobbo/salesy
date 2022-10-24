const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userAuth = require('../middleware/userAuth')


router.post('/register', userController.addUser)
router.post('/login', userController.userLogin)
router.post('/favorite', userController.addFavorite)

router.get('/verify', userController.getUser)


module.exports = router 