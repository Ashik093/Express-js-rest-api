const express = require('express')
const app = new express()
const router = require('./src/routes/api.js')

//security middleware
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xssClean = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')


app.use(helmet())
app.use(mongoSanitize())
app.use(xssClean())
app.use(hpp())
app.use(cors())

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

app.use('/api/v1', router)

app.use('*', (req, res) => {
    res.status(404).json({ status: "failed", data: "Not found" })
})

module.exports = app