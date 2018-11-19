const mongoose = require('mongoose')
const URLSlug = require('mongoose-url-slugs')
const lyricsschema = new mongoose.Schema({
  id: Number,
  title: String,
  src_artists: [String],
  src_songs: [String],
  lyrics: [String],
  generated: Boolean,
  public: Boolean,
  generated_by: String
})

const userschema = new mongoose.Schema({
  username: String,
  hash: String,
  cart: [String],
  lyrics: [String]
})
lyricsschema.plugin(URLSlug('title'))
mongoose.model('user', userschema)
mongoose.model('lyrics', lyricsschema)

mongoose.connect('mongodb://localhost/lyricgen', {
  useNewUrlParser: true
})
