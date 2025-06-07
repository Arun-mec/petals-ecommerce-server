const jwt = require('jsonwebtoken');

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: '30d'
    })

    // Set JWT as http only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
    });

    // res.cookie('test', '123', { httpOnly: true , sameSite: 'strict', secure: false, maxAge: 30 * 24 * 60 * 60 * 1000});

}

module.exports = generateToken;