const Joi = require('joi');

const checkAccountSchema = Joi.object({
    bank_code: Joi.string()
        .trim()
        .required(),

    account_number: Joi.string()
        .trim()
        .required()
});

module.exports = {
    checkAccountSchema
};