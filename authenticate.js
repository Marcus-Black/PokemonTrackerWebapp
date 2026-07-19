const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.sendStatus(401);
    }
    try{
    const decoded = jwt.verify(token, process.env.JWT_KEY);
     req.user = payload;
     next();
    } catch(err){
        return res.sendStatus(401);
    }
}

module.exports = authenticate;