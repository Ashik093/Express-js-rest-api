const express = require('express')
const app = new express()
const router = require('./src/routes/api.js')

app.use('/api/v1', router)

app.use('*', (req, res) => {
    res.status(404).json({ status: "failed", data: "Not found" })
})

module.exports = app