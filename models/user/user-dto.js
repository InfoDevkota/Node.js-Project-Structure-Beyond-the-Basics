const Joi = require('joi');

const createUserDTO = Joi.object({
    fullName: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})

const UserDTO = {
    createUserDTO
};

module.exports = UserDTO;