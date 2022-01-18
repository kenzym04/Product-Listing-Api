const mongoose = require('mongoose')

const roleSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
})

exports.Role = mongoose.model('Role', roleSchema)
