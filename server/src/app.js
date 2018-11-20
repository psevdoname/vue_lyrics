const express = require('express')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('./models/db')
// const session = require('express-session')
const app = express()
app.use(cors())

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const user = mongoose.model('user')
// const lyrics = mongoose.model('lyrics')

// whats cors for
require('./routes')(app)
app.listen(process.env.PORT || 8081)
