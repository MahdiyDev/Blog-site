const model = require("./model");
const { v4: UUID } = require('uuid');
const { rootFile } = require("../../config");

module.exports = {
  POST: async (req, res) => {
    try {
      const { postTitle } = req.body;
      const { mimetype, mv } = req.files.postImage
      if ( mimetype && mv && req.user ) {
          const name = UUID() + '.' + mimetype.split('/')[1]
          await model.newPost(postTitle, name, req.user.user_uid)
          mv(rootFile + '/uploads/' + name, (_) => {})
          res.redirect('http://localhost:3000/')
      } else {
        res.redirect('http://localhost:3000/')
      }
    } catch (err) {
      console.log(err);
    }
  },
  PUT: async (req, res) => {
    try {
      const { postTitle, postId } = req.body;
      const user = await model.userPost(req.user.user_uid)
      if ( req.files && user.length && postId ) {
          const { mv, mimetype } = req.files.postImage
          const name = UUID() + '.' + mimetype.split('/')[1]
          await model.updatePost(postTitle, name, postId)
          mv(rootFile + '/uploads/' + name, (_) => {})
          res.redirect('http://localhost:3000/')
      } else if (postTitle && user.length && postId) {
          await model.updatePostTitle(postTitle, postId)
          res.redirect('http://localhost:3000/')
      } else {
        res.redirect('http://localhost:3000/')
      }
    } catch (err) {
      console.log(err);
    }
  },
  DELETE: async (req, res) => {
    try {
      const { postId } = req.body;
      const user = await model.userPost(req.user.user_uid)
      if (postId && user.length) {
        await model.deletePost(postId)
        res.end()
      } else {
        res.status(200).json({ meassage: "Not delete" });
      }
    } catch (err) {
      console.log(err);
    }
  },
  GET: async (req, res) => {
    try {
      const allPosts = await model.allPosts();
      if (allPosts && req.user.user_uid) {
        res.status(200).json(allPosts);
      } else {
        res.status(400).json({ message: "No posts" });
      }
    } catch (err) {
      console.log(err);
    }
  },
  SINGLE_POST: async (req, res) => {
      try {
        const { img } = req.params
        res.sendFile(rootFile + '/uploads/' + img)
      } catch (error) {
        console.log(error);
      }
  },
  USER_POST: async (req, res) => {
      try {
        const { userId } = req.params
        const user = await model.userPost(userId)
        res.json(user)
      } catch (error) {
        console.log(error);
      }
  }
};
