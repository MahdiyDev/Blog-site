require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const router = require('../Routes/')
const app = express()

app.use(cors())
app.use(bodyParser())
app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT}`);
})
