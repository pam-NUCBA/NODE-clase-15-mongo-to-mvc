const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  category: Number,
  isActive: {
    type: Boolean,
    default: false
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
})

module.exports = mongoose.model('User', UserSchema)