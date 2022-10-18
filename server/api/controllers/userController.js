const userService = require('../services/userService')
const JsonWebToken = require('jsonwebtoken')
const SECRET = '84758327457'
const bcrypt = require('bcryptjs')

exports.addUser = async (req, res) => {
  try {
    let email = req.body.email
    let password = req.body.password
    console.log(req.body)
    const newuser = await userService.addUser(email, password)
    const token = JsonWebToken.sign({ id: newuser._id }, SECRET)
    console.log(token)
    res.status(200).json({ success: true, token: token })
  } catch (err) {
    res.status(500).json({ success: false, error: err })
  }
}

exports.userLogin = async (req, res) => {

    let email = req.body.email
    let password = req.body.password
    const validUser = await userService.validUsername(email)
    if (!validUser) {
      res.status(500).json({ success: false, error: 'Invalid username'})
    } else {
        const userPassword = validUser.password
        bcrypt.compare(password, userPassword, function(err, result) {
          if (!result) {
            res.status(500).json({ success: false, error: 'Invalid password'})
          }
          if (result == true) {
            const id = validUser.id
            
            const token = JsonWebToken.sign({ id: id }, SECRET)
            
            res.status(200).json({ success: true, token: token })
          }
        })
    }
  } 

exports.createSession = async (req, res) => {

}

exports.verifyToken = async (req, res) => {
  
}







