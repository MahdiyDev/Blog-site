const { fetch, fetchAll } = require("../../lib/postgres");
const ALL_COMMENTS = `
    select * from comments
`;
const NEW_COMMENT = `
    insert into comments(
        comment_title,
        comment_ref_user,
        comment_ref_post
    )values($1,$2,$3)returning *
`;
const COMMENT_COMMENT = `
    insert into comments(
        comment_title,
        comment_ref_user,
        comment_ref_post,
        comment_ref_comment
    )values($1,$2,$3,$4)returning *  
`;
const DELETE_COMMENT = `
        delete from comments where comment_uid = $1 returning * 
`;
const newComment = (commentTitle, commentRefUser, commentRefPost) =>
  fetch(NEW_COMMENT, commentTitle, commentRefUser, commentRefPost);
const allComments = () => fetchAll(ALL_COMMENTS);
const commentComment = (
  commentTitle,
  commentRefUser,
  commentRefPost,
  commentRefComment
) =>
  fetch(
    COMMENT_COMMENT,
    commentTitle,
    commentRefUser,
    commentRefPost,
    commentRefComment
  );
const deleteComment = (commentId) => fetch(DELETE_COMMENT, commentId);
module.exports = {
  allComments,
  newComment,
  commentComment,
  deleteComment,
};
