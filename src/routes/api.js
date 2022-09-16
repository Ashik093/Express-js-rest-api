const express = require('express')
const HelloController = require('../controllers/HelloController')
const StudentController = require('../controllers/StudentController')
const DemoController = require('../controllers/DemoController')
const TokenPractice = require('../controllers/AuthController')
const AuthMiddleware = require('../middleware/AuthMiddleware')
const router = express.Router()

//testing
router.get('/hello', HelloController.Hello)
router.post('/hello', HelloController.Hello)

//student
router.post('/StudentStore', AuthMiddleware, StudentController.Store)
router.get('/StudentGetAll', AuthMiddleware, StudentController.Index)
router.post('/StudentUpdate/:id', AuthMiddleware, StudentController.Update)
router.delete('/StudentDelete/:id', AuthMiddleware, StudentController.Delete)

//demo
router.post('/DemoInsert', DemoController.Store)

//Token Practice
router.get('/GetToken', TokenPractice.CreateToken)
router.get('/DecryptToken', TokenPractice.DecryptToken)

module.exports = router