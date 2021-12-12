const { fetch,fetchAll } = require('../../lib/postgres')

const USER_GET = `
    select 
        user_uid, user_avatar, user_fname,
        user_lname, user_email, user_date
    from users
    offset $1 limit $2
`

const USER_GET_ALL = `
    select 
        user_uid, user_avatar, user_fname,
        user_lname, user_email, user_date
    from users
`

const USER_GET_PARAMS = `
    select 
        user_uid, user_avatar, user_fname,
        user_lname, user_email, user_date
    from users
    where user_email = $1
`

const USER_REGISTER =  `
    insert into users(
        user_avatar, user_fname,user_lname, 
        user_email, user_password
    ) values (
        $1, $2, $3, $4, $5
    ) returning user_uid, user_avatar, user_fname, user_lname, user_email, user_date
`

const USER_LOGIN =  `
    select 
        user_uid, user_avatar, user_fname,
        user_lname, user_email, user_date
    from users
    where
        user_email = $1 and user_password = $2
`

const AVATAR = `
    update users
    set user_avatar = $1
    where user_uid = $2
    returning user_uid, user_avatar, user_fname, user_lname, user_email, user_date
`

const users = (page, limit) => fetchAll(USER_GET, page, limit)
const usersALL = () => fetchAll(USER_GET_ALL)
const avatar = ( name, user_uid ) => fetchAll(AVATAR, name, user_uid)
const usersParams = (params) => fetchAll(USER_GET_PARAMS, params)
const userRegister = (user_avatar, user_fname, user_lname, user_email, user_password) => 
    fetch(USER_REGISTER, user_avatar, user_fname, user_lname, user_email, user_password);
const userLogin = (user_email, user_password) => 
    fetchAll(USER_LOGIN, user_email, user_password)

module.exports = {
    users,
    usersALL,
    avatar,
    usersParams,
    userRegister,
    userLogin
}
