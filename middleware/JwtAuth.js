import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import jwtConf from '../helper/jwtconfig.js';

dotenv.config();

const catchExpired = (err, res, next) => {
    if (err instanceof jwt.TokenExpiredError) {
        return res.respondUnauthorized({statuscode: 401, message: "Unauthorized! Because the token was expired"});
    }

    next();
}

export const authenticateUser = async (req, res, next) => {
    const {authorization} = req.headers;
    if (!authorization?.startsWith("Bearer ")) {
        return res.status(403).json({status: 403, message: "No token provided, please provide into it"});
    }
    
    const accessToken = authorization.split(" ")[1];
    
    jwt.verify(accessToken, jwtConf.setSecretKey(process.env.JWT_KEY), (err, decoded) => {
        if (err) {
            return catchExpired(err, res);
        }

        req.payload = decoded;
        next();
    })
}