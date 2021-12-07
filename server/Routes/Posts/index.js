const express = require('express')
const router = express.Router()

const postController = require('../../Controllers/Posts/')

router.get('/post', postController.post)

module.exports = router;