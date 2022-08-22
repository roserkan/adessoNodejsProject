const Joi = require('joi');
const { categoryMessages } = require('../constants/messages');


const schema = Joi.object({
    name: Joi.string().min(2).max(50).required()
    .messages({
        "string.min": categoryMessages.categoryNameMin,
        "string.max": categoryMessages.categoryNameMax
    })
});




module.exports = schema;