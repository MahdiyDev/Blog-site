const express = require('express')
const router = express.Router()

const usersRoter = require('./Users/')
const postsRoter = require('./Posts/')
const commentsRoter = require('./Comments/')

router.use(usersRoter)
      .use(postsRoter)
      .use(commentsRoter)

module.exports = router;
