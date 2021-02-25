const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    const secret = process.env.JWT_SECRET || "Shhh..."

    if(token) {
        jwt.verify(token, secret, (err, decodedToken) =>{
            if(err) {
                res.status(401).json(err)
            } else{
                req.jwt = decodedToken

                next()
            }
        })

    }else{
        res.stauts(401).json({you:'not authorized'})
    }
}