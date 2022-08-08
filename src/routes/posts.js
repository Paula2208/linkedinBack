const router = require('express').Router();
const {
    getPosts,
    createPost,
    deletePost
} = require('../entities/posts')

router.route('/posts')
      .get(getPosts)
      .post(createPost)
      .delete(deletePost);

router.route('/posts/:postId')
      .delete(deletePost);

module.exports = router;