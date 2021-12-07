const { Users, Signup, Login } = require('./model')

exports.signup = async (req, res) => {
    try {
        const token = Signup(req.body)

        res.json(await token)
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    try {
        const token = Login(req.body)

        res.json(await token)
    } catch (error) {
        console.log(error);
    }
}

exports.users = async (req, res) => {
    try {
        res.json(await Users())
    } catch (error) {
        console.log(error);
    }
}

exports.auth = (req, res) => {
    if (typeof req.user !== 'undefined') {
        res.json(req.user)
    } else {
        res.json({ message: 'authorization faild' })
    }
}
