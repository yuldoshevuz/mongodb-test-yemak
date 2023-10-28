const express = require('express')
const { MongoClient } = require('mongodb')
const port = 5000
const routes = require('./routes/index.router')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log('Server running on port', port))