const express = require('express')
const app = express()
const cors= require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,
dbconnectionString = process.env.DB_STRING,
dbName = 'sample_mflix',
collection

MongoClient.connect(dbconnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('movies')
    })

    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })