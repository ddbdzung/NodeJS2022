const express = require('express');
const router = express.Router()

const userRoute = require('./user.route')
const postRoute = require('./post.route')
const authRoute = require('./auth.route')
const shortenURLRoute = require('./shortenURL.route')

const defaultRoutes = [
    {
      path: '/users',
      route: userRoute
    },
    {
      path: '/auth',
      route: authRoute
    },
    {
      path: '/shortenURL',
      route: shortenURLRoute
    },
    {
      path: '/posts',
      route: postRoute
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router;