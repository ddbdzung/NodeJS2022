const { userService } = require('../services')

// [GET /user]
const showUser = async (req, res) => {
    try {
        const users = await userService.showAllUser()
        res.json({
            users,
        })
    } catch (err) {
        return res.send({
            message: err,
        })
    }
}

// [GET /user/:id]
const showUserById = async (req, res) => {
    try {
        const user = await userService.showUserById(req.params.id)
        res.json({
            user,
        })
    } catch (err) {
        return res.send({
            message: err,
        })
    }
}

// [POST /user/create]
const createUser = async (req, res) => {
    try {
        const user = await userService.createANewUser(req.body)
        res.json({
            user,
        })
    } catch (err) {
        return res.send({
            message: err,
        })
    }
}

// [PATCH /user/update/:id]
const updateUser = async (req, res) => {
    try {
        const user = await userService.updateOneUser(req.params.id, req.body)
        if (!user['matchedCount'] === 1) return res.send('Nothing was updated')
        
        res.status(200).send('Update successfully')
    } catch (err) {
        return res.send({
            message: err,
        })
    }
}

// [DELETE /user/delete/:id]
const deleteUserById = async (req, res) => {
    try {
        const user = await userService.deleteUserById(req.params.id)
        if (user === null) return res.send('Nothing was deleted')
        res.json({
            user,
        })
    } catch (err) {
        return res.send({
            message: err,
        })
    }
}

const getUserInRangeOfAge = async (req, res) => {
    try {
        const users = await userService.getUserWithAge(18, 40)
        res.json({
            users: users,
        })
    } catch (err) {
        return res.send({
            message: err,
        })
    }
}

const getUserWithPatternMatchName = async (req, res) => {
    try {
        const users = await userService.getUserWithPatternMatchName(/^h/)
        res.json({
            users,
        })
    } catch (err) {
        return res.send({
            message: err,
        })
    }
}

module.exports = {
    showUser,
    createUser,
    updateUser,
    showUserById,
    deleteUserById,
    getUserInRangeOfAge,
    getUserWithPatternMatchName,
}