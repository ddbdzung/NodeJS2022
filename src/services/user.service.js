const { User } = require('../models')

const showAllUser = async () => {
    const users = await User.find({})
    return users
}

const createANewUser = async (userBody) => {
    const user = await User.create(userBody)
    return user
}

const updateOneUser = async (userId, userBody) => {
    const user = await User.updateOne(
        { _id: userId },
        userBody,
    )
    return user
}

const showUserById = async (userId) => {
    const user = await User.findById(userId)
    return user
}

const deleteUserById = async (userId) => {
    const user = await User.findByIdAndDelete(userId)
    return user
}

const getUserWithAge = async (start, end) => {
    start = parseInt(start)
    end = parseInt(end)
    const user = await User.find({
        age: { $gt: start, $lte: end } 
    })
    return user
}

const getUserWithPatternMatchName = async (pattern) => {
    const users = await User.find({ name: pattern })
    return users
}

module.exports = {
    createANewUser,
    showAllUser,
    updateOneUser,
    showUserById,
    deleteUserById,
    getUserWithAge,
    getUserWithPatternMatchName,
}