const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Protected routes - only user can access it
const protect = asyncHandler(async (req, res, next) => {

    let token;
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const userId = decoded.userId;
            req.user = await User.findById(userId).select("-password");
            next();
        }
        catch {
            res.status(401);
            throw new Error("Not an authorised user")
        }
    }
    else {
        res.status(401);
        throw new Error("Not an authorised user")
    }
})

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    }
    else {
        res.status(401)
        throw new Error("Not an authorised user")
    }
}

module.exports = { admin, protect};
