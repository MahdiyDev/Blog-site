require('dotenv').config()
const jwt = require('jsonwebtoken')

function validate(req, res, next) 
{
    const bearerHeader = req.headers['authorization'];
    
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        const user = jwt.verify(bearerToken, process.env.TOKEN)
        req.user = user[0];
        next()       
    } else {
        res.status(403).json({ message: 'Not Allowed' })
    }
}

module.exports = { validate };
