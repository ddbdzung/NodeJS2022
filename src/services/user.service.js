const { User } = require('../models')

const showAllUser = async () => {
    try {
        const users = await User.find({})
        return users
    } catch (err) {
        return err.message
    }
}

const createANewUser = async (userBody) => {
    try {
        const user = await User.create(userBody)
        return user
    } catch (err) {
        return err.message
    }
}

const updateOneUser = async (userId, userBody) => {
    try {
        const user = await User.updateOne(
            { _id: userId },
            userBody,
        )
        return user
    } catch (err) {
        return err.message
    }
}

const showUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        return user
    } catch (err) {
        return err.message
    }
}

const deleteUserById = async (userId) => {
    try {
        const user = await User.findByIdAndDelete(userId)
        return user
    } catch (err) {
        return err.message
    }
}

module.exports = {
    createANewUser,
    showAllUser,
    updateOneUser,
    showUserById,
    deleteUserById,
}