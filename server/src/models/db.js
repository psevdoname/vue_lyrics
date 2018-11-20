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
