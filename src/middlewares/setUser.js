const setUser = (req, res, next) => {
    if (!req.body.role) return res.status(403).send('You have to sign in')

    req.role = req.body.role
    next()
}

module.exports = {
    setUser,
}