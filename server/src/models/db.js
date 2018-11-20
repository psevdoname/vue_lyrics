const mongoose = require('mongoose')
const URLSlug = require('mongoose-url-slugs')

var passportLocalMongoose = require('passport-local-mongoose')

const lyricsschema = new mongoose.Schema({
  id: {
    type: Number, required: true
  },
  title: String,
  src_artists: [String],
  src_songs: [String],
  lyrics: [String],
  generated: Boolean,
  public: Boolean,
  generated_by: String
})

const userschema = new mongoose.Schema({
  username: {
    type: String, required: true, unique: true
  },
  password: String,
  email: {
    type: String, required: true, unique: true
  },
  hash: String,
  cart: [String],
  lyrics: [String]
})
userschema.plugin(passportLocalMongoose)
lyricsschema.plugin(URLSlug('title'))
userschema.plugin(URLSlug('username'))

mongoose.model('User', userschema)
mongoose.model('Lyrics', lyricsschema)

let dbconf
if (process.env.NODE_ENV === 'PRODUCTION') {
// if we're in PRODUCTION mode, then read the configration from a file
// use blocking file io to do this...
  const fs = require('fs')
  const path = require('path')
  const fn = path.join(__dirname, 'config.json')
  const data = fs.readFileSync(fn)

  // our configuration file will be in json, so parse it and set the
  // conenction string appropriately!
  const conf = JSON.parse(data)
  dbconf = conf.dbconf
} else {
// if we're not in PRODUCTION mode, then use
  dbconf = 'mongodb://localhost/lyricgen'
}

mongoose.connect(dbconf, {
  useNewUrlParser: true
})
