const Joi = require('joi');

const login = {
    body: Joi.object().keys({
        username: Joi.string().required().email(),
        password: Joi.string().required(),
    }),
};

const refreshToken = {
    body: Joi.object().keys({
        refreshToken: Joi.string().required(),
    }),
};

const logout = {
    body: Joi.object().keys({
        refreshToken: Joi.string().required(),
    }),
};

const forgetPassword = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
    })
}

const resetPassword = {
    params: Joi.object().keys({
        resetToken: Joi.string().required()
    }),
    body: Joi.object().keys({
        password: Joi.string().required(),
    })
}

module.exports = {
    login,
    refreshToken,
    logout,
    forgetPassword,
    resetPassword,
};
