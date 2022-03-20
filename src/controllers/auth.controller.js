const { tokenService } = require('../services')
const { env } = require('../configs/config')

// [POST /login]
const login = async (req, res) => {
    try {
        /**
         * req.body.user: {
         *      id,
         *      username,
         *      password
         * }
         */
        const userData = req.body.user
        const accessToken = await tokenService.generateToken(userData, env.accessTokenSecret, env.accessTokenLife)
        return res.status(200).json({ accessToken })
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = {
    login,
}