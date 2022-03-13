const { ROLE } = require('./constants')

const canView = (user, post) => {
    return (
        user.role === ROLE.ADMIN ||
        post.userId === user._id
    )
}

// const isAdmin = (user) => {
//     return (
//         user.role === ROLE.ADMIN
//     )
// }

const isAdmin = (role) => {
    return (
        role === ROLE.ADMIN
    )
}

const adminScope = (user, posts) => {
    if (user.role === ROLE.ADMIN) return posts
    
    return posts.filter(post => post.userId === user._id)
}

module.exports = {
    isAdmin,
    canView,
    adminScope,
}

