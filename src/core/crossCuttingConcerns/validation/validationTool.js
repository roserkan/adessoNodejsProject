const Joi = require('joi');

function ValidationTool(entity, schema){
    const {error, value} = schema.validate(entity);
    if(error){
        return error.details[0].message;
        // return true // There is an error
    }

    return false; // There isn't an error
}


module.exports = ValidationTool;