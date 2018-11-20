require('../models/db.js')
const mongoose = require('mongoose')
const User = mongoose.model('User')
var passport = require('passport')

// var userController = {}

module.exports = {
  async register (req, res) {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    await User.register(newUser, req.body.password, function (err, user) {
      if (err) {
        // something liek name: 'UserExistsError',
        // message: 'A user with the given username is already registered' }
        console.log(err)
      } else {
        passport.authenticate('local')(req, res, () => {
          console.log('registered')
        })
        User.find((err, data) => {
          if (!err) {
            console.log(data)
          }
        })
      }
    })
  },
  async login (req, res) {
    console.log('logging in')
    await passport.authenticate('local')(req, res, function () {
      console.log('Success login')
    })
  }
}
