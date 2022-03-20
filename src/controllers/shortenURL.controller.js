const { shortenURLService } = require('../services')

// [POST /create]
const shortenURL = async (req, res) => {
    try {
        const longUrl = req.body.originalUrl
        const url = await shortenURLService.findOriginalURL(longUrl)
        if (url) return res.json(url.shortUrl)

        // There is a null url variable
        const urlCode = shortenURLService.generateShortid()
        const shortUrl = shortenURLService.baseUrl + '/' + urlCode
        let urlInDB = await shortenURLService.saveShortURL(longUrl, shortUrl, urlCode)
        return res.status(200).json(urlInDB.shortUrl)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
}

// [GET /redirect/:shortId]
const redirectURL = async (req, res) => {
    try {
        const shortIdInClient = req.params.shortId
        if (!shortIdInClient) return res.status(400).send('No shortId provided')

        const url = await shortenURLService.findShortURL(shortIdInClient)
        if (!url) return res.status(400).send('Invalid URL')

        res.redirect(url.longUrl)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
}

module.exports = {
    shortenURL,
    redirectURL,
}