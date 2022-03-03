const { userService } = require('../services')

// [GET /user]
const showUser = async (req, res) => {
    const users = await userService.showAllUser()
    res.send(users)
}

// [GET /user/:id]
const showUserById = async (req, res) => {
    const user = await userService.showUserById(req.params.id)
    res.send(user)
}

// [POST /user/create]
const createUser = async (req, res) => {
    const responseAPI = await userService.createANewUser(req.body)
    res.send(responseAPI)
}

// [PATCH /user/update/:id]
const updateUser = async (req, res) => {
    const responseAPI = await userService.updateOneUser(req.params.id, req.body)
    res.send(responseAPI)
}

// [DELETE /user/delete/:id]
const deleteUserById = async (req, res) => {
    const responseAPI = await userService.deleteUserById(req.params.id)
    res.send(responseAPI)
}

module.exports = {
    showUser,
    createUser,
    updateUser,
    showUserById,
    deleteUserById,
}