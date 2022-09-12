const express = require('express')
const HelloController = require('../controllers/HelloController')
const StudentController = require('../controllers/StudentController')
const router = express.Router()

//testing
router.get('/hello', HelloController.Hello)
router.post('/hello', HelloController.Hello)

//student
router.post('/StudentStore', StudentController.Store)
router.get('/StudentGetAll', StudentController.Index)
router.post('/StudentUpdate/:id', StudentController.Update)
router.delete('/StudentDelete/:id', StudentController.Delete)

module.exports = router