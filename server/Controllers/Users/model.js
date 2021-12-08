require('dotenv').config()
const jwt = require('jsonwebtoken')
const { pg, pgString } = require('../../Configs/pg')

const Users = async () => {
    const users = await pg(`
        select user_uid, user_avatar, user_fname, user_lname, user_email, user_date from users 
        where is_admin = false`)

    return users
}

const Signup = async ({ user_fname, user_lname, user_email, user_password }) => {
    const oldUser = await pg(`select * from users where user_email = $1`, user_email)

    if (!oldUser.length) {
        const signup = await pg(`
            insert into users(user_fname, user_lname, user_email, user_password)
            values($1, $2, $3, $4) returning user_uid, user_fname, user_lname, user_email, user_date, user_avatar
        `, user_fname, user_lname, user_email, user_password)

        const token =  jwt.sign(JSON.stringify(signup), process.env.TOKEN)

        return { accessToken: `bearer ${token}`}
    } else {
        return { message: 'Not Signup' }
    }
}

const Login = async ({ user_email, user_password }) => {
    const oldUser = await pg(`
        select user_uid, user_avatar, user_fname, user_lname, user_email, user_date, user_avatar from users 
        where user_email = $1 and user_password = $2`,
        user_email, user_password)

    if (oldUser.length) {
        const token =  jwt.sign(JSON.stringify(oldUser), process.env.TOKEN)

        return { accessToken: `bearer ${token}`}
    }  else {
        return { message: 'Not Login' }
    }
}

module.exports = 
{
    Users,
    Signup,
    Login
};
