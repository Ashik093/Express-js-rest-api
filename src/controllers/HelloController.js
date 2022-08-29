exports.Hello = (req, res) => {
    res.status(200).json({ status: "ok", data: "Hello" })
}