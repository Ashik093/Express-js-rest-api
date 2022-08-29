const express = require('express')
const HelloController = require('../controllers/HelloController')
const router = express.Router()

router.get('/hello', HelloController.Hello)
router.post('/hello', HelloController.Hello)

module.exports = router