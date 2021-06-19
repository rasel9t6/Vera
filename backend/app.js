const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()
const PORT = 5000
const DB_CONNECTION = process.env.DB_CONNECTION

const resourceRoutes = require('./routes/resources')

// Middleware || routes
app.use(bodyparser.json())

// a link to seperated routes
app.use('/resources', resourceRoutes)

// home page route
app.get('/', (req, res) => {
    res.send('This is our home url!')
})

mongoose.connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
            console.log('MongoDB connected 😄')
        }
    ).catch(() => {
        console.log('DB connection failed')
    }
)

// start the server via npm start
app.listen(PORT)
