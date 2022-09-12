const StudentModel = require('./../models/StudentModel')

//store
exports.Store = (req, res) => {
        let reqBody = req.body
        StudentModel.create(reqBody, (error, data) => {
            if (error) {
                res.status(400).json({
                    status: 'error',
                    data: error
                })
            } else {
                res.status(201).json({
                    status: 'success',
                    data: data
                })
            }
        })
    }
    //get all
exports.Index = (req, res) => {
        let query = {}
        let projection = "Name Roll Class Remarks"
        StudentModel.find(query, projection, (error, data) => {
            if (error) {
                res.status(400).json({
                    status: 'error',
                    data: error
                })
            } else {
                res.status(201).json({
                    status: 'success',
                    data: data
                })
            }
        })
    }
    //update
exports.Update = (req, res) => {
        let query = { _id: req.params.id }
        let reqBody = req.body
        StudentModel.updateOne(query, reqBody, (error, data) => {
            if (error) {
                res.status(400).json({
                    status: 'error',
                    data: error
                })
            } else {
                res.status(201).json({
                    status: 'success',
                    data: data
                })
            }
        })
    }
    //delete
exports.Delete = (req, res) => {
    let query = { _id: req.params.id }
    StudentModel.remove(query, (error, data) => {
        if (error) {
            res.status(400).json({
                status: 'error',
                data: error
            })
        } else {
            res.status(201).json({
                status: 'success',
                data: data
            })
        }
    })
}