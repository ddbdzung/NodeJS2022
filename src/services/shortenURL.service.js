const baseUrl = 'http:localhost:5000'
const shortid = require('shortid')
const { Url } = require('../models')

/**
 * 
 * @returns {string} a shortid string
 */
const generateShortid = () => {
    return shortid.generate()
}

/**
 * 
 * @param {string} originalUrl 
 * @returns {Promise}
 */
const findOriginalURL = async (originalUrl) => {
    return await Url.findOne({ longUrl: originalUrl })
}

/**
 * 
 * @param {string} shortUrl 
 * @returns {Promise}
 */
const findShortURL = async (urlCode) => {
    return await Url.findOne({ urlCode })
}

/**
 * 
 * @param {string} shortUrl 
 * @param {string} originalUrl 
 * @param {string} shortUrl 
 * @param {string} urlCode 
 * @returns {Promise}
 */
const saveShortURL = async (originalUrl, shortUrl, urlCode) => {
    let url = new Url({
        longUrl: originalUrl,
        shortUrl,
        urlCode,
        date: new Date()
    })
    return await url.save()
}

module.exports = {
    findOriginalURL,
    saveShortURL,
    baseUrl: baseUrl,
    generateShortid,
    findShortURL,
}