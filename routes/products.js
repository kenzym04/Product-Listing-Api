const { Product } = require('../models/product')
const express = require('express')
const router = express.Router()
const { Role } = require('../models/role')
const mongoose = require('mongoose')

router.get(`/`, async (req, res) => {
  let filter = {}
  if (req.query.roles) {
    filter = { role: req.query.roles.split(',') }
  }
  const productList = await await Product.find(filter).populate('role')

  if (!productList) {
    res.status(500).json({ success: false })
  }
  res.send(productList)
})

router.get(`/:id`, async (req, res) => {
  const product = await Product.findById(req.params.id).populate('role')

  if (!product) {
    res.status(500).json({ success: false })
  }
  res.send(product)
})

router.post(`/`, async (req, res) => {
  const role = await Role.findById(req.body.role)
  if (!role) return res.status(400).send('Invalid role')

  let product = new Product({
    Id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    role: req.body.role,
    quantity: req.body.quantity,
    manufacturer: req.body.manufacturer,
    distributor: req.body.distributor,
    unitCost: req.body.unitCost,
  })

  product = await product.save()

  if (!product) return res.status(500).send('Cannot create product!')

  res.send(product)
})

router.put('/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).send('Invalid product id!')
  }
  const role = await Role.findById(req.body.role)
  if (!role) return res.status(400).send('Invalid role')

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      role: req.body.role,
      quantity: req.body.quantity,
      manufacturer: req.body.manufacturer,
      distributor: req.body.distributor,
      unitCost: req.body.unitCost,
    },
    { new: true }
  )

  if (!product) return res.status(500).send('Cannot update product!')

  res.send(product)
})

router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then((product) => {
      if (product) {
        return res
          .status(200)
          .json({ success: true, message: 'Product deleted successfully' })
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'No such product found!' })
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err })
    })
})

module.exports = router
