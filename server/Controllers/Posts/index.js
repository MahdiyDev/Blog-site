require('dotenv').config()
const { delimiter } = require('path')
const { Posts } = require('./model')

exports.posts = async (req, res) => {
    res.json(await Posts())
}

exports.avatar = async (req, res) => {
    const { img } = req.params
    const path = process.env.PATH.split(delimiter)[0].split('node_modules')[0]

    res.sendFile(path + '/Uploads/' + img)
}
