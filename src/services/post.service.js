const { Post } = require('../models')
const mongoose = require('mongoose')

const getAllPosts = async () => {
    const posts = await Post.find({})
    return posts
}

const getPostsByUserid = async (id) => {
    const posts = await Post.find({ userId: id })
    return posts
}

/**
 * @param {string} userId 
 * @param {object} newPost {title} | {title, content}
 * @returns {promise<post>}
 */
const createPost = async (userId, newPost) => {
    if (!newPost.content) {
        newPost.content = ''
    }
    const doc = {
        userId: userId,
        title: newPost.title,
        content: newPost.content,
    }
    const post = await Post.create(doc)
    return post
}

module.exports = {
    getAllPosts,
    getPostsByUserid,
    createPost,
}