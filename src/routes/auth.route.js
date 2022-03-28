const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const { authValidation } = require('../validations')
const validate = require('../middlewares/validate')

router
    .get('/password-forget', authController.viewPasswordForget)
    .get('/password-reset/:resetToken', authController.viewPasswordReset)
    .post('/login', validate(authValidation.login), authController.login)
    .post('/password-forget', validate(authValidation.forgetPassword), authController.forgetPassword)
    .post('/password-reset/:resetToken', validate(authValidation.resetPassword), authController.resetPassword)

module.exports = router