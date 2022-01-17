const { Product } = require('../models/product')
const express = require('express')
const router = express.Router()
const { Category } = require('../models/category')
const mongoose = require('mongoose')

router.get(`/`, async (req, res) => {
  let filter = {}
  if (req.query.categories) {
    filter = { category: req.query.categories.split(',') }
  }
  const productList = await await Product.find(filter).populate('category')

  if (!productList) {
    res.status(500).json({ success: false })
  }
  res.send(productList)
})

router.get(`/:id`, async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category')

  if (!product) {
    res.status(500).json({ success: false })
  }
  res.send(product)
})

router.post(`/`, async (req, res) => {
  const category = await Category.findById(req.body.category)
  if (!category) return res.status(400).send('Invalid Category')

  let product = new Product({
    Id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    category: req.body.category,
    quantity: req.body.quantity,
    manufacturer: req.body.manufacturer,
    distributor: req.body.distributor,
    unitCost: req.body.unitCost,
  })

  product = await product.save()

  if (!product) return res.status(500).send('The product cannot be created')

  res.send(product)
})

router.put('/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).send('Invalid Product Id')
  }
  const category = await Category.findById(req.body.category)
  if (!category) return res.status(400).send('Invalid Category')

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      category: req.body.category,
      quantity: req.body.quantity,
      manufacturer: req.body.manufacturer,
      distributor: req.body.distributor,
      unitCost: req.body.unitCost,
    },
    { new: true }
  )

  if (!product) return res.status(500).send('the product cannot be updated!')

  res.send(product)
})

router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then((product) => {
      if (product) {
        return res
          .status(200)
          .json({ success: true, message: 'the product deleted' })
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'product not found' })
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err })
    })
})

module.exports = router
