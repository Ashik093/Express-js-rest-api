var jwt = require('jsonwebtoken')

exports.CreateToken = (req, res) => {
    let payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: { name: "Ashik", city: "Dhaka", admin: true }
    }
    const token = jwt.sign(payload, "Secrete123")
    res.send(token)
}

exports.DecryptToken = (req, res) => {
    let token = req.headers['token']
    const data = jwt.verify(token, "Secrete123", function(err, data) {
        if (err) {
            res.status(401).json({ status: "Invalid Token", data: err })
        } else {
            res.status(200).json({ status: "Success", data: data })

        }
    })
}