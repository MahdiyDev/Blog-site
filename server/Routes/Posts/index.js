const express = require('express')
const router = express.Router()

const postController = require('../../Controllers/Posts/')

router.get('/posts', postController.posts)

module.exports = router;