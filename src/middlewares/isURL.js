const validUrl = require('valid-url')

const isURL = (req, res, next) => {
    if (!req.body.originalUrl) return res.status(400).send('No URL provided')

    const rawOriginalURL = req.body.originalUrl
    if (!validUrl.isUri(rawOriginalURL)) return res.status(400).send('Invalid URL')

    next()
}

module.exports = {
    isURL,
}