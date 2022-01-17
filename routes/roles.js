const { Roles } = require('../Models/roles')
const express = require('express')
const router = express.Router()

router.get(`/`, async (req, res) => {
  const rolesList = await Roles.find()

  if (!rolesList) {
    res.status(500).json({ success: false })
  }
  res.send(rolesList)
})

module.exports = router
