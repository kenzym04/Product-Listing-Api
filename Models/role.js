const mongoose = require('mongoose')

const rolesSchema = mongoose.Schema({
  Id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
})

exports.Role = mongoose.model('Role', rolesSchema)
