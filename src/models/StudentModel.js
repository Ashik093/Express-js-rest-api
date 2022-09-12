const mongoose = require('mongoose')
const StudentSchema = mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remarks: String
})

const StudentModel = mongoose.model('students', StudentSchema)
module.exports = StudentModel