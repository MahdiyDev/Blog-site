require('dotenv').config()
const express = require('express')
const router = require('../Routes/')
const app = express()

app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT}`);
})
