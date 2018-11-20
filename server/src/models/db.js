const mongoose = require('mongoose')
// require('./models/db')
// const dummy = require('mongoose-dummy')
const URLSlug = require('mongoose-url-slugs')

// const ignoredFields = ['_id', 'created_at']
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
    type: String, required: true
  },
  email: {
    type: String, required: true
  },
  hash: String,
  cart: [String],
  lyrics: [String]
})

lyricsschema.plugin(URLSlug('title'))
userschema.plugin(URLSlug('username'))

mongoose.model('User', userschema)
mongoose.model('Lyrics', lyricsschema)

// const User = mongoose.model('User', userschema)
// const Lyrics = mongoose.model('Lyrics', lyricsschema)
// let dumb = dummy(User, {
//   ignore: ignoredFields,
//   returnDate: true
// })
// console.log(dumb)

// dummy(Lyrics, {
//   ignore: ignoredFields,
//   returnDate: true
// })

// console.log(randomObject)
// console.log(randomObject2)
// const auser = new User({
//   username: 'artemtest2',
//   email: 'artem@test1.comm',
//   hash: 'HAS22H',
//   cart: ['first song2'],
//   lyrics: ['Lyrics for song 12']
// })
// const auser2 = new User(dumb)

mongoose.connect('mongodb://localhost/lyricgen', {
  useNewUrlParser: true
})
// console.log(dumb)

// auser2.save((err) => {
//   if (!err) {
//     console.log('poluch')
//     User.find((err, enn) => {
//       if (!err) {
//         console.log('date')
//         console.log(enn)
//       }
//     })
//   } else {
//     console.log(err)
//   }
// })
