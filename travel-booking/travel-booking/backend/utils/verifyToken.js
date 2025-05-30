import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken; // extract token from cookies

    if(!token) { // if statement to check if token is present/exists
        return res.status(401).json({
            success:false,
            message:"Unauthorized access."});
    }
    
    // for verification of token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err) {
            return res.status(401).json({
                success:false,
                message:"Token is not valid"});
        }
        req.user = user;
        next();
    });
};

export const verifyUser =(req, res, next) => {
    verifyToken(req, res, next,() => {
        if(req.user.id === req.params.id || req.user.role === "admin") {
            next();
        } else {
           return res.status(401).json({
                success:false,
                message:"User not authenticated."
            });
        }
    });
};

export const verifyAdmin =(req, res, next) => {
    verifyToken(req, res, next,() => {
        if( req.user.role === "admin") {
            next();
        } else {
            return res.status(401).json({
                success:false,
                message:"Unauthorized access."
            });
        }
    });
};