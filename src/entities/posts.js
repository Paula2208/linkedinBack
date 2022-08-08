const db = require('../../models/index.js');
const {isCreatePost} = require('../guards/posts');
const timestamp = require('time-stamp');

const getPosts = (req, res, next) => {
    db.posts.findAll()
        .then(u => {
            res.status(200).json(u).send();
        })
        .catch((error) => {
            res.status(500).send();
        });
}

const createPost = (req, res, next) => {
    const post = req.body;
    post.post_id = timestamp('YYYYMMDDHHmmssms');
    post.status_post = '';

    if(!isCreatePost(post)){
        res.status(400).json({
            error: 'Guard failed'
        }).send();
        return;
    }

    db.posts.create(post)
        .then(u => {
            res.status(201).send();
        })
        .catch(() => {
            res.status(500).send();
        });

}

const deletePost = (req, res, next) => {
    const post_id = req.params.postId || '';

    db.posts.destroy({
        where:{
            post_id: post_id
        }
    })
        .then(u => {
            res.status(204).send();
        })
        .catch(() => {
            res.status(500).send();
        });
}

module.exports= {
    getPosts,
    createPost,
    deletePost
};