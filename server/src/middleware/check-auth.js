const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {   
        console.log(req.headers.authorization);

        const token = req.headers.authorization;
        console.log(token);

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.userData = decoded;

        next();
    } catch (error) {
        res.status(401).json({message: 'Auth failed', error});
    }
};