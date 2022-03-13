const express = require('express')
const router = express.Router()

const { setUser } = require('../middlewares/setUser')
const authorization = require('../middlewares/authorization')
const postController = require('../controllers/post.controller')

router
    .get('/', setUser, authorization.isAdmin, postController.getAllPosts)
    .post('/create/:id', postController.createPost)
    .get('/:id', postController.getPostsByUserid)

module.exports = router