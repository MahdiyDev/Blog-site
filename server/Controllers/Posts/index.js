const { Posts } = require('./model')

exports.posts = async (req, res) => {
    res.json(await Posts())
}