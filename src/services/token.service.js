const jwt = require('jsonwebtoken')
const { Token } = require('../models')
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { reset } = require('nodemon');

/**
 * private function generateToken
 * @param user
 * @param secretSignature
 * @param tokenLife
 */
let generateToken = (user, secretSignature, tokenLife) => {
    return new Promise((resolve, reject) => {
        // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
        const userData = {
            _id: user.id,
            username: user.username,
            password: user.password,
        }
        // Thực hiện ký và tạo token
        jwt.sign(
            { data: userData },
            secretSignature,
            {
                algorithm: "HS256",
                expiresIn: tokenLife,
            },
            (err, token) => {
                if (err) {
                    return reject(error)
                }
                resolve(token)
            }
        )
    })
}

/**
 * private function generate a ResetPassword Token
 * @param user
 * @param secretSignature
 * @param tokenLife
 */
 let generateResetPasswordToken = (user, secretSignature, tokenLife) => {
    return new Promise((resolve, reject) => {
        // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
        const userData = {
            userId: user._id,
        }
        // Thực hiện ký và tạo token
        jwt.sign(
            { data: userData },
            secretSignature,
            {
                algorithm: "HS256",
                expiresIn: tokenLife,
            },
            (err, token) => {
                if (err) {
                    return reject(error)
                }
                resolve(token)
            }
        )
    })
}

/**
 * This module used for verify jwt token
 * @param {*} token 
 * @param {*} secretKey 
 */
let verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decodedToken) => {
            if (err) {
                return reject(err)
            }
            resolve(decodedToken)
        })
    })
}

let getResetTokenByUserid = async userId => {
    const token = await Token.findOne({
        userId: userId,
    })
    // Nếu không có token => Bên ngoài tự xử lý
    return token
}

let saveResetToken = async (userId, resetToken) => {
    const token = await Token.create({
        userId: userId,
        token: resetToken,
    })
    if (!token) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Fail to create token')
    }

    return token
}

let deleteToken = async token => {
    const deletedToken = await Token.deleteOne({
        token: token,
    })

    return deletedToken
}

let findTokenAndDelete = async tokenFromClient => {
    const token = await Token.findOneAndDelete({
        token: tokenFromClient,
    })
    if (!token) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'No token available')
    }
    
    return token
}

module.exports = {
    generateToken: generateToken,
    verifyToken: verifyToken,
    getResetTokenByUserid,
    saveResetToken,
    generateResetPasswordToken,
    deleteToken,
    findTokenAndDelete,
}