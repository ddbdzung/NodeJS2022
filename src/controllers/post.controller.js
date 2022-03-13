const { postService } = require('../services')

// [GET /posts]
const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts()
        return res.status(200).json({
            posts,
        })
    } catch (err) {
        return res.send({
            message: err,
        })
    }
}

// [GET /posts/:id]
const getPostsByUserid = async (req, res) => {
    try {
        const posts = await postService.getPostsByUserid(req.params.id)
        res.json({
            posts,
        })
    } catch (err) {
        return res.send({
            message: err,
        })
    }
}

// [POST /posts/create/:id]
const createPost = async (req, res) => {
    const userId = req.params.id
    const newPost = req.body.post
    try {
        const createPost = await postService.createPost(userId, newPost)
        res.json({
            createPost,
        })
    } catch (err) {
        res.send({
            message: 'Can not create the post',
        })
    }
}

module.exports = {
    getAllPosts,
    getPostsByUserid,
    createPost,
}