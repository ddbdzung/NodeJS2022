const mongoose = require('mongoose');
// const { toJSON } = require('./plugins')

const User = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        trim: true,
        private: true, // used by the toJSON plugin
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      age: {
        type: Number,
      },
      gender: { type: String, enum: [0, 1], required: true },
      role: {
        type: String,
        email: ['admin', 'user'],
        default: 'user',
      },
    },
    {
      timestamps: true
    }
);

const UserSchema = mongoose.model('User', User, 'user');

module.exports = UserSchema;