const mongoose = require('mongoose');
const { toJSON } = require('./plugins')

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        private: true // used by the toJSON plugin
      },
      address: { type: String },
      gender: { type: String, enum: [0, 1], required: true },
      status: { type: String, enum: [0, 1, 2], default: '1' }
    },
    {
      timestamps: true
    }
);

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;