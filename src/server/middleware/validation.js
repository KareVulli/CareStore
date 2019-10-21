import Joi from 'joi';

export default (schema, property = 'body') => (req, res, next) => {
    const {error, value} = Joi.validate(req[property], schema);

    if (error === null) {
        req[property] = value;
        console.log('passed');
        next();
    } else {
        const message = error.details.map((i) => i.message).join(', ');
        res.status(422).json({message: message});
    }
};
