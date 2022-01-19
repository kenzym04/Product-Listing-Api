const { User } = require('../models/user')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.get(`/show`, async (req, res) => {
  const userList = await User.find().select('-passwordHash')

  if (!userList) {
    res.status(500).json({ success: false })
  }
  res.send(userList)
})

router.get('show/:id', async (req, res) => {
  const user = await User.findById(req.params.id).select('-passwordHash')

  if (!user) {
    res.status(500).json({ message: 'No user found matching that id!' })
  }
  res.status(200).send(user)
})

router.post('/new', async (req, res) => {
  let user = new User({
    uId: req.body.uId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    isAdmin: { type: Boolean },
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 12),
  })
  user = await user.save()

  if (!user) return res.status(400).send('Sorry! User cannot be created')

  res.send(user)
})

router.post('/auth/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  const secret = process.env.secret

  if (!user) {
    return res.status(400).send('the user not found')
  }
  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      secret,
      { expiresIn: '1d' }
    )
    res.status(200).send({ user: user.email, token: token })
  } else {
    res.status(400).send('password is wrong')
  }
})
//To update password
router.put('/update/:id', async (req, res) => {
  const userExist = await User.findById(req.params.id)
  let newPassword
  if (req.body.password) {
    newPassword = bcrypt.hashSync(req.body.password, 10)
  } else {
    newPassword = userExist.passwordHash
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      uId: req.body.uId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      isAdmin: { type: Boolean },
      email: req.body.email,
      passwordHash: bcrypt.hashSync(req.body.password, 12),
    },
    { new: true }
  )
  if (!user) return res.status(400).send('Sorry! User cannot be crreated')

  res.send(user)
})

router.post('/auth/register', async (req, res) => {
  let user = new User({
    uId: req.body.uId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    isAdmin: { type: Boolean },
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 12),
  })
  user = await user.save()

  if (!user) return res.status(400).send('Sorry! User cannot be crreated')

  res.send(user)
})

router.delete('delete/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: 'User deleted sucessfully' })
      } else {
        return res.status(404).json({
          success: false,
          message: 'No such No record matching that user!',
        })
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err })
    })
})

module.exports = router
