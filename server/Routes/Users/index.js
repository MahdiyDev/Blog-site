const express = require('express')
const router = express.Router()

const userController = require('../../Controllers/Users/')

router.get('/signup', userController.signup)
router.get('/login', userController.login)

module.exports = router;
