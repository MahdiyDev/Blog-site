const express = require('express')
const router = express.Router()

const postController = require('../../Controllers/Posts/')

router.get('/posts', postController.posts)
      .get('/uploads/:img', postController.avatar)

module.exports = router;