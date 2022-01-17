const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
})

exports.Category = mongoose.model('Category', categorySchema)
