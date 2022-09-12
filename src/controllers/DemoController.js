const DemoModel = require("../models/DemoModel")

exports.Store = (req, res) => {
    DemoModel.create(req.body, (error, data) => {
        if (error) {
            res.status(400).json({ status: "failed", data: error })
        } else {
            res.status(200).json({ status: "success", data: data })

        }
    })
}