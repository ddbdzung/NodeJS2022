const Joi = require('joi');

const createUser = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required(),
        age: Joi.number(),
        gender: Joi.string().required(),
        role: Joi.string(),
    }),
};

module.exports = {
    createUser,
};
