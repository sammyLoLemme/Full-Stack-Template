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

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.get('/', async (request, response)=>{
    try {
        response.render('index.ejs')
    } catch (error){
        response.status(500).send({message: error.message})
    }
})



    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })