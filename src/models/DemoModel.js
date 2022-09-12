const mongoose = require('mongoose')
const DemoSchema = mongoose.Schema({
    Name: String,
    Age: Number,
    Adult: Boolean,
    Result: [],
    Gurdian: {},
    DOB: Date
})
const DemoModel = mongoose.model('demo', DemoSchema)
module.exports = DemoModel