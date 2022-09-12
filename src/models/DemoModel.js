const mongoose = require('mongoose')
const DemoSchema = mongoose.Schema({
    Name: { type: String, unique: true },
    Age: Number,
    Adult: Boolean,
    Roll: {
        type: Number,
        required: true,
        min: [6, "Min value is 6 & Max value is 12, but supplied value is {VALUE}"],
        max: [12, "Min value is 6 & Max value is 12, but supplied value is {VALUE}"],
    },
    Mobile: {
        type: String,
        validate: {
            validator: function(value) {
                if (value.length !== 11) {
                    return false
                } else {
                    return true
                }
            },
            message: "Mobile number should be 11 digit"
        }
    },
    Mobile2: {
        type: String,
        validate: {
            validator: function(value) {
                return /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/.test(value)
            },
            message: "Invalid Phone Number"
        }
    },
    Result: [],
    Gurdian: {},
    DOB: Date,
    Remarks: { type: String, default: "No Remarks" },
    CreatedAt: { type: Date, default: Date.now }
}, { versionkey: false })
const DemoModel = mongoose.model('demo', DemoSchema)
module.exports = DemoModel