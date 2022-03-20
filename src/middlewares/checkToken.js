const { tokenService } = require('../services')
const { env } = require('../configs/config')

const isAuth = async (req, res, next) => {
    if (!req.body.accessToken) return res.status(403).send('Unauthorized')

    try {
        const data = await tokenService.verifyToken(req.body.accessToken, env.accessTokenSecret)
        res.locals.data = data
        next()
    } catch (err) {
        res.status(403).send('Unauthorized')
    }
}

module.exports = {
    isAuth,
}