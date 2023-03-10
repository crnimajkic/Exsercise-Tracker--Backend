const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
// require('dotenv').config()
const path = require('path')

app.use(cors({
    origin:["http://localhost:3000","https://exsercise-tracker.onrender.com",]
}))
app.use(express.json())

const PORT = process.env.PORT || 5000

const URI = process.env.DB_STRING

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection

connection.once('open', () => {
    console.log(`Connected to MongoDB`)
})

const exserciseRouter = require('./routes/exsercises')
const usersRouter = require('./routes/users')

app.use('/exsercises',exserciseRouter)
app.use('/users',usersRouter)






app.listen(PORT, console.log(`Server listening at ${PORT}`))
