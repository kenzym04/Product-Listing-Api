const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

//List of middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

require('dotenv/config')

const api = process.env.API_URL

// Product Get request http://localhost:3000/api/v1/products
app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: 'Sorghum_v23',
    image: 'https://depositphotos.com/stock-photos/sorghum.html',
  }
  res.send(product)
})
//Product Post request http://localhost:3000/api/v1/products
app.post(`${api}/products`, (req, res) => {
  const addNewProduct = req.body
  console.log(addNewProduct)
  res.send(addNewProduct)
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
