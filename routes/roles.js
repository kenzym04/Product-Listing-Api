const { Role } = require('../models/role')
const express = require('express')
const router = express.Router()

router.get(`/`, async (req, res) => {
  const roleList = await Role.find()

  if (!roleList) {
    res.status(500).json({ success: false })
  }
  res.send(roleList)
})

router.get('/:id', async (req, res) => {
  const role = await Role.findById(req.params.id)

  if (!role) {
    res.status(500).json({ message: 'No role found matchng that id!' })
  }
  res.status(200).send(role)
})

router.post(`/`, async (req, res) => {
  let role = new Role({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
  })
  role = await role.save()

  if (!role) return res.status(404).send('Failed to create role!')

  res.send(role)
})

router.put('/:id', async (req, res) => {
  const role = await Role.findByIdAndUpdate(
    req.params.id,
    {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
    },
    { new: true }
  )

  if (!role) return res.status(400).send('Failed to create role!')

  res.send(role)
})

router.delete('/:id', (req, res) => {
  Role.findByIdAndRemove(req.params.id)
    .then((role) => {
      if (role) {
        return res
          .status(200)
          .json({ success: true, message: 'role deleted sucessfully' })
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'role not found!' })
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err })
    })
})

module.exports = router
