const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const path = require('path');
const Joi = require('joi');

const env = dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });
dotenvExpand.expand(env);

const envVarsSchema = Joi.object()
    .keys({
        SALT: Joi.number()
            .default(10)
            .required()
            .description('salt will be generated randomly'),
        PORT: Joi.number().default(8080),
        ACCESS_TOKEN_SECRET: Joi.string().alphanum().required(),
        ACCESS_TOKEN_LIFE: Joi.string().alphanum().required(),
        REFRESH_TOKEN_SECRET: Joi.string().alphanum().required(),
        REFRESH_TOKEN_LIFE: Joi.string().alphanum().required(),
        ADMINEMAIL: Joi.string().email().required(),
        ADMINPASSWORD: Joi.string().required(),
        MAILHOST: Joi.string().required(),
        MAILPORT: Joi.number().required(),
        RESET_PASSWORD_SECRET: Joi.string().alphanum().required(),
        RESET_PASSWORD_LIFE: Joi.string().alphanum().required(),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    salt: envVars.SALT,
    port: envVars.PORT,
    accessTokenKey: envVars.ACCESS_TOKEN_SECRET,
    refreshTokenKey: envVars.REFRESH_TOKEN_SECRET,
    accessTokenLife: envVars.ACCESS_TOKEN_LIFE,
    refreshTokenLife: envVars.REFRESH_TOKEN_LIFE,
    adminEmail: envVars.ADMINEMAIL,
    adminPassword: envVars.ADMINPASSWORD,
    mailHost: envVars.MAILHOST,
    mailPort: envVars.MAILPORT,
    resetPasswordKey: envVars.RESET_PASSWORD_SECRET,
    resetPasswordLife: envVars.RESET_PASSWORD_LIFE,

};
