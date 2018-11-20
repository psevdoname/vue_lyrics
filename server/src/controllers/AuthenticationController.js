require('../models/db.js')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {

  register (req, res) {
    const myData = new User({
      email: req.body.email,
      username: res.body.username,
      password: res.body.password
    })
    console.log(myData)
    // console.log(mongoose.model('User').schema)
    try {
      // User()
      res.send({
        message: 'hellowow'
      })

      User.find((err, data) => {
        if (!err) {
          console.log(data)
        }
      })

      // res.send({
      //   message: 'req.body'
      // })
      // console.log(newUser)
      // newUser.save((err) => {
      //   if (!err) {
      //     console.log('success')
      //   } else {
      //     console.log(err)
      //   }
      // })
      // User.find((err, data) => {
      //   if (!err) {
      //     console.log(data)
      //   }
      // })
    } catch (err) {
      res.send({
        message: err
      })
    }
  }
}
