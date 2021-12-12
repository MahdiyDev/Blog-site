const express = require("express");
const router = express.Router();


const CommentsModule = require('./comments')

router.get('/comments',CommentsModule.GET)
router.post("/comments",CommentsModule.POST);
router.post('/comments',CommentsModule.REPLY)
router.delete('/comments',CommentsModule.DELETE)

module.exports = router;