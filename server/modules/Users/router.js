const express = require('express')
const router = express.Router()
const { validate } = require('../../middlewares/jwt')

const userModule = require('./user')

router.get('/users', validate, userModule.GET)
      .get('/user/:email', validate, userModule.USER)
      .get('/auth', validate, userModule.AUTH)
      .get('/avatar/:img', userModule.AVATARGET)
      .post('/avatar', validate, userModule.AVATAR)
      .post('/signup', userModule.REGISTER)
      .post('/login', userModule.LOGIN)

module.exports = router
