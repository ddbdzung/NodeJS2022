const { tokenService, userService } = require('../services')
const configs = require('../configs/config')
const mailService = require('../utils/sendEmail')
const path = require('path')

// [POST /login]
const login = async (req, res) => {
    try {
        const userData = req.body.user
        const accessToken = await tokenService.generateToken(userData, configs.accessTokenSecret, configs.accessTokenLife)
        return res.status(200).json({ accessToken })
    } catch (err) {
        return res.status(500).json(err)
    }
}

// [POST /password-forget]
const forgetPassword = async (req, res) => {
    try {
        const emailFromClient = req.body.email
        let user 
        try {
            user = await userService.getUserByEmail(emailFromClient)
        } catch (err) {
            console.log(err)
            return res.status(401).send('No user with this email existing')
        }
        let token = await tokenService.getResetTokenByUserid(user._id)
        let resetToken
        if (!token) {
            resetToken = await tokenService.generateResetPasswordToken(user, configs.resetPasswordKey, configs.resetPasswordLife)
            await tokenService.saveResetToken(user._id, resetToken)
        }
        resetToken = resetToken || token.token

        const linkReset = `http://127.0.0.1:${configs.port}/auth/password-reset/${resetToken}`
        // res.send(linkReset)

        await mailService.sendEmail(user.email, 'Password reset', linkReset)
        res.send('Password reset link sent to your email successfully')
    } catch (err) {
        console.log(err)
        return res.send('An error occured')
    }
}

// [GET /password-forget]
const viewPasswordForget = (req, res) => {
    return res.render('pages/forgetPassword', {
        title: 'Forget password'
    })
}

// [GET /password-reset]
const viewPasswordReset = (req, res) => {
    return res.render('pages/resetPassword', {
        title: 'Reset password',
        resetToken: req.params.resetToken,
    })
}

// [POST /password-reset/:userId/:token]
const resetPassword = async (req, res) => {
    try {
        const resetToken = req.params.resetToken
        let tokenFromDatabase
        try {
            tokenFromDatabase = await tokenService.findTokenAndDelete(resetToken)
        } catch (err) {
            // Redirect to another page because link expired
            return res.status(400).send('No token available')
        }

        const jwtDecoded = await tokenService.verifyToken(resetToken, configs.resetPasswordKey)
        const passwordFromClient = req.body.password
        await userService.updateNewPassword(jwtDecoded.data.userId, passwordFromClient)
        res.status(200).send('Update new password successfully')
    } catch (err) {
        console.log(err)
        return res.send('Link expired. Please resend your request')
    }
}

module.exports = {
    login,
    forgetPassword,
    resetPassword,
    viewPasswordForget,
    viewPasswordReset,
}