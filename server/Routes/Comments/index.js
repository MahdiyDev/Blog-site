const express = require('express')
const router = express.Router()

const commentsController = require('../../Controllers/Comments/')

router.get('/comments', commentsController.comment)

module.exports = router
