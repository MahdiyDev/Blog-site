const { Comments } = require("./model")

exports.comment = async (req, res) => {
    res.json(await Comments())
}