require('dotenv').config()

const env = {
    accessTokenLife: process.env.ACCESS_TOKEN_LIFE,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenLife: process.env.REFRESH_TOKEN_LIFE,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
}

module.exports = {
    env,
}