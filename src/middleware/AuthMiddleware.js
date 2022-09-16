const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    let token = req.headers['token']
    const data = jwt.verify(token, "Secrete123", function(err, data) {
        if (err) {
            res.status(401).json({ status: "Invalid Token", data: err })
        } else {
            next()
        }
    })
}