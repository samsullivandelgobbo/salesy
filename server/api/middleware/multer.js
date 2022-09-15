const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: async function (req, file, cb) {
    let parsedJSON = JSON.parse(req.body.jsondata)
    let stockNum = parsedJSON.stockNum
    if(!req.headers.index)
      req.headers.index=0
    let filename = stockNum + (req.headers.index++) + '.jpg'
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })
module.exports = upload