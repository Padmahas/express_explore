const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const host = process.env.HOST_URL
const exampleService = require('./services/exampleService')

app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.listen(port, () => {
    console.log(`Example app listening at ${host}:${port}`)
    exampleService.initilizeFunctions();
});

module.exports = app;