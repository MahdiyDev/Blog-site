const { fetch, fetchAll } = require("../../lib/postgres");
const NEW_POST = `
    insert into posts(
        post_title,
        post_img,
        post_ref_user
    )values($1,$2,$3) returning *;
`;
const DELETE_POST = `
       delete from posts where post_uid=$1 returning * ;
`;
const UPDATE_POST = `
        update posts 
        set post_title =$1,
            post_img =$2
        where post_uid = $3 returning *
`;

const UPDATE_POST_TITLE = `
        update posts 
        set post_title =$1
        where post_uid = $2 returning *
`;

const ALL_POSTS = `
      select 
      post_uid, post_title, post_img, 
      post_date, user_avatar, user_email
      from posts
      inner join users
      on users.user_uid = posts.post_ref_user
`;

const USER_POST = `
      select 
      post_uid, post_title, post_img, 
      post_date, user_avatar, user_email
      from posts
      inner join users
      on users.user_uid = posts.post_ref_user
      where user_uid = $1
`
const allPosts = () => fetchAll(ALL_POSTS);
const userPost = (userId) => fetchAll(USER_POST, userId);
const newPost = (postTitle, postImg, postRefUser) =>
  fetch(NEW_POST, postTitle, postImg, postRefUser);
const updatePost = (postTitle, postImg, postId) =>
  fetch(UPDATE_POST, postTitle, postImg, postId);
  const updatePostTitle = (postTitle, postId) =>
  fetch(UPDATE_POST_TITLE, postTitle, postId);
const deletePost = (postId) => fetch(DELETE_POST, postId);
module.exports = {
  allPosts,
  userPost,
  newPost,
  updatePost,
  updatePostTitle,
  deletePost,
};
