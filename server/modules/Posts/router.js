const express = require("express");
const { validate } = require('../../middlewares/jwt')
const router = express.Router();

const PostsModule = require('./posts')

router.get('/posts', validate, PostsModule.GET)
router.get('/post/:img', PostsModule.SINGLE_POST)
router.get('/postUser/:userId', validate, PostsModule.USER_POST)
router.post('/updatePost', validate, PostsModule.PUT)
router.post("/posts", validate, PostsModule.POST);
router.delete('/posts', validate,PostsModule.DELETE)

module.exports = router;