const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')

router
    .get('/', userController.showUser)
    .get('/:id', userController.showUserById)
    .post('/create', userController.createUser)
    .patch('/update/:id', userController.updateUser)
    .delete('/delete/:id', userController.deleteUserById)

module.exports = router