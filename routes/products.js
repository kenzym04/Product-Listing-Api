const Product = require('../models/product')
const express = require('express')
const router = express.Router()

router.get(`/`, async (req, res) => {
  const productList = await Product.find()

  if (!productList) {
    res.status(500).json({ success: false })
  }
  res.send(productList)
})

router.post(`/`, (req, res) => {
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

module.exports = router
