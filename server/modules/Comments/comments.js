const model = require("./model");
module.exports = {
  GET: async (_, res) => {
    try {
      const allComments = await model.allComments();
      if (allComments) {
        res.status(200).json(allComments);
      } else {
        res.status(400).json({ message: "No Comments ..." });
      }
    } catch (err) {
      console.log(err);
    }
  },
  POST: async (req, res) => {
    try {
      const { commentTitle, commentRefUser, commentRefPost } = req.body;
      const newComment = await model.newComment(
        commentTitle,
        commentRefUser,
        commentRefPost
      );
      if (newComment) {
        res.status(200).json(newComment);
      } else {
        res.status(400).json({ message: "Invalid values ..." });
      }
    } catch (err) {
      console.log(err);
    }
  },
  DELETE: async (req, res) => {
    try {
      const { commentId } = req.body;
      const deleteComment = await model.deleteComment(commentId);
      if (deleteComment) {
        res.status(200).json(deleteComment);
      } else {
        res.status(400).json({ message: "Not Delete ..." });
      }
    } catch (err) {
      console.log(err);
    }
  },
  REPLY: async (req, res) => {
    try {
      const {
        commentTitle,
        commentRefUser,
        commentRefPost,
        commentRefComment,
      } = req.body;
      console.log(req.body);
      const replyComment = await model.commentComment(
        commentTitle,
        commentRefUser,
        commentRefPost,
        commentRefComment
      );
      if(replyComment){
          res.status(200).json(replyComment)
      }else{
          res.status(400).json({message:"Invalid values ..."})
      }
    } catch (err) {
      console.log(err);
    }
  },
};
