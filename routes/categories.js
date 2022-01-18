const { Category } = require('../models/category')
const express = require('express')
const router = express.Router()

router.get(`/`, async (req, res) => {
  const categoryList = await Category.find()

  if (!categoryList) {
    res.status(500).json({ success: false })
  }
  res.send(categoryList)
})

router.get('/:id', async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (!category) {
    res.status(500).json({ message: 'No category found matchng that id!' })
  }
  res.status(200).send(category)
})

router.post(`/`, async (req, res) => {
  let category = new Category({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
  })
  category = await category.save()

  if (!category) return res.status(404).send('Failed to create category!')

  res.send(category)
})

router.put('/:id', async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
    },
    { new: true }
  )

  if (!category) return res.status(400).send('Failed to create category!')

  res.send(category)
})

router.delete('/:id', (req, res) => {
  Category.findByIdAndRemove(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(200)
          .json({ success: true, message: 'Category deleted sucessfully' })
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'Category not found!' })
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err })
    })
})

module.exports = router
