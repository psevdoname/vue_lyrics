const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// let dbconf
// if (process.env.NODE_ENV === 'PRODUCTION') {
// // if we're in PRODUCTION mode, then read the configration from a file
// // use blocking file io to do this...
//   const fs = require('fs')
//   const path = require('path')
//   const fn = path.join(__dirname, 'config.json')
//   const data = fs.readFileSync(fn)

//   // our configuration file will be in json, so parse it and set the
//   // conenction string appropriately!
//   const conf = JSON.parse(data)
//   dbconf = conf.dbconf
// } else {
// // if we're not in PRODUCTION mode, then use
//   dbconf = 'mongodb://localhost/lyricgenNew'
// }

// mongoose.connect(dbconf, {
//   useNewUrlParser: true
// })
mongoose.connect('mongodb://localhost/lyricgenNew')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})

// mongoose.connect('mongodb://localhost/lyricgen').then(() => console.log('connection succesful')).catch((err) => console.error(err))
// var db = mongoose.connection
var User = require('../models/user')

var Lyrics = require('../models/lyrics')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// require('./models/db')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy// const session = require('express-session')
const app = express()

app.use(cors())
app.use(morgan('combined'))
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(passport.initialize())
app.use(passport.session())
const AuthenticationController = require('./controllers/AuthenticationController')

app.get('/songs', (req, res) => {
  Lyrics.find({}, 'title src_artists lyrics', function (error, songs) {
    if (error) { console.error(error) }
    res.send({
      songs: songs
    })
  }).sort({ _id: -1 })
})

app.post('/songs', (req, res) => {
  console.log('getting post')

  // var db = req.db
  var title = req.body.title
  var lyrics = req.body.lyrics
  var artists = req.body.artists

  var newLyrics = new Lyrics({
    title: title,
    lyrics: lyrics,
    artists: artists
  })

  newLyrics.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})
app.get('/song/:title', (req, res) => {
  Lyrics.findById(req.params.id, 'title src_artists lyrics', function (error, song) {
    if (error) { console.error(error) }
    res.send(song)
  })
})

// Update a post
app.put('/song/:id', (req, res) => {
  Lyrics.findById(req.params.id, 'title src_artists lyrics', function (error, song) {
    if (error) { console.error(error) }

    song.title = req.body.title
    song.description = req.body.description
    song.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

app.post('/register', AuthenticationController.register)
app.post('/login', AuthenticationController.login)
// app.post('/logout', AuthenticationController.logout)

// const user = mongoose.model('user')
// const lyrics = mongoose.model('lyrics')

// whats cors for
// require('./routes')(app)
app.listen(process.env.PORT || 8081)
