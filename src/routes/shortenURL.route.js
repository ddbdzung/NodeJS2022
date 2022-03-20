const express = require('express')
const router = express.Router()

const { isAuth } = require('../middlewares/checkToken')
const { isURL } = require('../middlewares/isURL')
const shortenURLController = require('../controllers/shortenURL.controller.js')

router
    .get('/redirect/:shortId', isAuth, shortenURLController.redirectURL)
    .post('/create', isAuth, isURL, shortenURLController.shortenURL)

    // Test Routes without token
    // .post('/create', isURL, shortenURLController.shortenURL)
    // .get('/redirect/:shortId', shortenURLController.redirectURL)

module.exports = router