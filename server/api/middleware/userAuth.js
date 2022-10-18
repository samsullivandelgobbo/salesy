const JsonWebToken = require('jsonwebtoken')
const SECRET = '84758327457'


exports.Auth = (req, res, next) => {
    if (req.headers && req.headers.authorization) {
      let authorization = req.headers.authorization
      try {
        let decoded = JsonWebToken.verify(authorization, SECRET)
        console.log(decoded)
        next()
      } catch (err) {
          res.status(500).json({ success: false, error: 'Authorization failed' })
      }   
    } else {
        res.status(500).json({ success: false, error: 'Authorization not provided' })
    }
  }


