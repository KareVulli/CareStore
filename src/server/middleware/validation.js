import {validationResult} from 'express-validator';

export default (validations) => async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errorFormatter = ({msg}) => msg;
    const errors = validationResult(req).formatWith(errorFormatter);

    if (errors.isEmpty()) {
        console.log('passed');
        next();
    } else {
        // const message = errors.array().join(', ');
        res.status(422).json({message: 'There were validation errors', errors: errors.mapped()});
    }
};
