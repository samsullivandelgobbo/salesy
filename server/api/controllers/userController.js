const userService = require('../services/userService')
const JsonWebToken = require('jsonwebtoken')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')

dotenv.config()
SECRET = process.env.TOKEN_SECRET

exports.addUser = async (req, res) => {
  try {
    let email = req.body.email
    let password = req.body.password
    const newuser = await userService.addUser(email, password)
    const token = JsonWebToken.sign({ id: newuser._id }, SECRET)
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


exports.getUser = async (req, res) => {
  
    if (req.headers && req.headers.authorization) {
      let authorization = req.headers.authorization

      try {
        let decoded = JsonWebToken.verify(authorization, SECRET)

        try {
          const findUser = await userService.getUserbyId(decoded.id)
          res.status(200).send(findUser)
        } catch (err) {
          res.status(500).json({ error: err })
        
        }

      } catch (err) {
          res.status(500).json({ success: false, error: 'Authorization failed' })
      }   
    } else {
        res.status(500).json({ success: false, error: 'Authorization not provided' })
    }

  }

  exports.addFavorite = async (req, res) => {
    try {
      const favorite = await userService.addFavorite(req.body.id, req.body.favorite)
      console.log(req.body)
      res.status(200).send(favorite)
    } catch (err) {
      res.status(500).json({error: err})
    }
  }
