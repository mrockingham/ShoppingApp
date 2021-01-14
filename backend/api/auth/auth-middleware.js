const jwt = require("jsonwebtoken"); // <<<<< install the library

module.exports = (req, res, next) => {
    //
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || "Shh...";

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                // something wrong with the token
                res.status(401).json({ you: "error" });
            } else {
                // token is good we can see the data inside the decodedToken
                req.jwt = decodedToken;

                next();
            }
        });
    } else {
        res.status(401).json({ you: "error  " });
    }
};