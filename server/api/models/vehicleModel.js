const mongoose = require("mongoose")

const inventorySchema = mongoose.Schema({
  stockNum: {
    type: String,
    required: true,
    unique: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dateIn: {
    type: Date,
    default: Date.now,
  },
  dateOut: {
    type: Date
  },
  specs: {
    engine: String,
    drivetrain: String,
    platform: String,
  },
  location: {
    String
  },
  notes: {
    type: String,
    maxlength: 200,
  },
  mediaPath: {
    type: String,
  },
  photos: {
      type: String,
  },
  category: {
    type: 'ObjectId',
    ref: 'Category',
  },
  sold: {
    type: Boolean,
    required: true,
    default: false
  },
  customer: {
    type: 'ObjectId',
    ref: 'Customer',
    default: null
  }
})

module.exports = mongoose.model("Vehicle", inventorySchema)