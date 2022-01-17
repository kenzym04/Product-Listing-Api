const { Role } = require('../Models/role')
const express = require('express')
const router = express.Router()

router.get(`/`, async (req, res) => {
  const rolesList = await Role.find()

  if (!rolesList) {
    res.status(500).json({ success: false })
  }
  res.send(rolesList)
})

module.exports = router
