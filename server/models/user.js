const mongoose = require('mongoose')
const URLSlug = require('mongoose-url-slugs')

var passportLocalMongoose = require('passport-local-mongoose')

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
userschema.plugin(URLSlug('username'))

var User = mongoose.model('User', userschema)
module.exports = User
