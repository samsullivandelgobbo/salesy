const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String,
    },
    last: {
      type: String,
    }
  },
  favorites: [{
    type: mongoose.Types.ObjectId,
    ref: 'Vehicle',
  }],
  creditScore: {
    type: Number,
  },
  income: {
    type: Number,
  },
  age: {
    type: Number,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }

})

module.exports = mongoose.model("User", userSchema)