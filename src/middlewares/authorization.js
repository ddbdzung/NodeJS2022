const permissions = require('../configs/permissions')

const isAdmin = (req, res, next) => {
    // if (!permissions.isAdmin(req.user)) return res.status(403).send('You are not authorized')
    if (!permissions.isAdmin(req.role)) return res.status(403).send('You are not authorized')

    next()
}

module.exports = {
    isAdmin,
}