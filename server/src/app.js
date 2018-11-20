const express = require('express')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/lyricgen').then(() => console.log('connection succesful')).catch((err) => console.error(err))

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('./models/db')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy// const session = require('express-session')
const app = express()
app.use(cors())

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))
const User = mongoose.model('User')
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(passport.initialize())
app.use(passport.session())
// const user = mongoose.model('user')
// const lyrics = mongoose.model('lyrics')

// whats cors for
require('./routes')(app)
app.listen(process.env.PORT || 8081)
