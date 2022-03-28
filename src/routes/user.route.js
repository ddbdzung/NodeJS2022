const express = require('express')
const router = express.Router()
const authorization = require('../middlewares/authorization')
const { setUser } = require('../middlewares/setUser')
const userController = require('../controllers/user.controller')
const validate = require('../middlewares/validate')
const { userValidation } = require('../validations')

router
    .get('/', setUser, authorization.isAdmin, userController.showUser)
    .get('/rangeAge', setUser, authorization.isAdmin, userController.getUserInRangeOfAge)
    .get('/patternmatchname', setUser, authorization.isAdmin, userController.getUserWithPatternMatchName)
    .post('/create', validate(userValidation.createUser), userController.createUser)
    .patch('/update/:id', userController.updateUser)
    .delete('/delete/:id', setUser, authorization.isAdmin, userController.deleteUserById)
    .get('/:id', userController.showUserById)

module.exports = router