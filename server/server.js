const express = require("express");
const expressFileUpload = require('express-fileupload')
const cors = require("cors");
const app = new express();
const router = require('./modules/routes')

app.use(expressFileUpload());
app.use(express.json())
app.use(cors());
app.use(router)
const PORT = 4300;

app.listen(PORT,console.log('appp is run'));
