const { tokenService } = require('../services')
const configs = require('../configs/config')

const isAuth = async (req, res, next) => {
    if (!req.body.accessToken) return res.status(403).send('Unauthorized')

    try {
        const data = await tokenService.verifyToken(req.body.accessToken, configs.accessTokenSecret)
        res.locals.data = data
        next()
    } catch (err) {
        console.log(err)
        res.status(403).send('Unauthorized')
    }
}

module.exports = {
    isAuth,
}