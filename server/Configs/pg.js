const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1407',
    database: 'blog_site'
})

const poolString = new Pool({
    connectionString: 'postgres://ihdmiidd:IjuSszMqHePrT02flXWcE8iYNmS0SSP-@ella.db.elephantsql.com/ihdmiidd'
})

const pgString = async (SQL, ...values) => {
    const client = await poolString.connect()

    try {
        const data = await client.query(SQL, values)
        return data.rows
    } catch (error) {
        console.log(error);
    } finally {
        client.release()
    }
}

const pg = async (SQL, ...values) => {
    const client = await pool.connect()

    try {
        const data = await client.query(SQL, values)
        return data.rows
    } catch (error) {
        console.log(error);
    } finally {
        client.release()
    }
}

module.exports = { pg, pgString }
