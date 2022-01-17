const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

//List of middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: String,
  description: String,
  type: String,
  category: String,
  quantity: Number,
  manufacturer: String,
  distributor: String,
  unitCost: {
    type: Number,
    required: true,
  },
})

require('dotenv/config')

const Product = mongoose.model('Product', productSchema)

const api = process.env.API_URL

// Product Get request http://localhost:3000/api/v1/products
app.get(`${api}/products`, async (req, res) => {
  const productList = await Product.find()
  if (!productList) {
    res.status(500).json({ success: false })
  }
  res.send(productList)
})

//Product Post request http://localhost:3000/api/v1/products
app.post(`${api}/products`, (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    category: req.body.category,
    quantity: req.body.quantity,
    manufacturer: req.body.manufacturer,
    distributor: req.body.distributor,
    unitCost: req.body.unitCost,
  })

  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct)
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      })
    })
})

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'productlistingstore-database',
  })
  .then(() => {
    console.log('Database is ready to connect')
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
