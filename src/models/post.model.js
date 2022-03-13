const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true,
    },
    title: {
        type: String,
        require: [true, 'Post must have a title'],
        trim: true,
    },
    content: {
        type: String,
        maxlength: 5000,
    },
})

const PostSchema = mongoose.model('Post', Post, 'post')
module.exports = PostSchema