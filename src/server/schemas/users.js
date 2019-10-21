import Joi from 'joi';

export default {
    user: Joi.object({
        firstname: Joi.string().lowercase().required(),
        lastname: Joi.string().lowercase().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    }),
    login: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
};
