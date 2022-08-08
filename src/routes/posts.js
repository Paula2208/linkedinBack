const router = require('express').Router();
const {
    getPosts,
    createPost
} = require('../entities/posts')

router.route('/posts')
      .get(getPosts)
      .post(createPost);

module.exports = router;