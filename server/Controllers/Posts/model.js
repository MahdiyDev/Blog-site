const { pg } = require("../../Configs/pg")

const Posts = async () => {
    const posts = await pg('select * from posts')

    return posts
}

module.exports = 
{
    Posts
}
