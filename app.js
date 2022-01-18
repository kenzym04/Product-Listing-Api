const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
//const authJwt = require('./helpers/jwt')
//const errorHandler = require('./helpers/error-handler.js')

app.use(cors())
app.options('*', cors())

//List of middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))
//app.use(authJwt())
//app.use(errorHandler)

//The Routes
const categoriesRoutes = require('./routes/categories')
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')
const ordersRoutes = require('./routes/orders')
const rolesRoutes = require('./routes/roles')

const api = process.env.API_URL

app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/users`, usersRoutes)
app.use(`${api}/orders`, ordersRoutes)
app.use(`${api}/roles`, rolesRoutes)

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
