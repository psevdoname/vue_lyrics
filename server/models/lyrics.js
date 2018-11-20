var mongoose = require('mongoose')
const URLSlug = require('mongoose-url-slugs')
var Schema = mongoose.Schema

var lyricsschema = new Schema({
  // id: {
  //   type: Number, required: true
  // },
  title: String,
  src_artists: [String],
  src_songs: [String],
  lyrics: [String],
  generated: Boolean,
  public: Boolean,
  generated_by: String
})
lyricsschema.plugin(URLSlug('title'))

var Lyrics = mongoose.model('Lyrics', lyricsschema)
module.exports = Lyrics
