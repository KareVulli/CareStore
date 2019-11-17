import jwt from 'jsonwebtoken';

export default (admin = false) => async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        res.status(401).json({message: 'No token provided'});
        return;
    }
    const token = authorizationHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({message: 'Invalid authorization header'});
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (admin && !decoded.admin) {
            throw new Error('Insufficient permissions');
        }
        console.log('authenticated');
        res.locals.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({message: err.message});
    }
};
