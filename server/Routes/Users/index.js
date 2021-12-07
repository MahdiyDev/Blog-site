const express = require('express')
const router = express.Router()
const { validate } = require('../../Middlewares/jwt')

const userController = require('../../Controllers/Users/')

router.post('/signup', userController.signup)
      .post('/login', userController.login)
      .get('/users', userController.users)
      .get('/auth', validate, userController.auth)

module.exports = router;
