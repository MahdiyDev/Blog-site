const { pg } = require("../../Configs/pg")

const Comments = async () => {
    const comments = await pg('select * from comments')

    return comments
}

module.exports = 
{
    Comments
}
