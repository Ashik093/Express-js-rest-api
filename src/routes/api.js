const express = require('express')
const HelloController = require('../controllers/HelloController')
const StudentController = require('../controllers/StudentController')
const DemoController = require('../controllers/DemoController')
const router = express.Router()

//testing
router.get('/hello', HelloController.Hello)
router.post('/hello', HelloController.Hello)

//student
router.post('/StudentStore', StudentController.Store)
router.get('/StudentGetAll', StudentController.Index)
router.post('/StudentUpdate/:id', StudentController.Update)
router.delete('/StudentDelete/:id', StudentController.Delete)

//demo
router.post('/DemoInsert', DemoController.Store)

module.exports = router