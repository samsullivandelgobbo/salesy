const mongoose = require('mongoose')
const messageSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  message: {
    type: String, 
    required: true,
    max
  }
})

module.exports = mongoose.model("Message", messageSchema)