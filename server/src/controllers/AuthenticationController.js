require('../models/db.js')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  register (req, res) {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    newUser.save((err) => {
      if (err) {
        res.status(400).send({
          error: 'email in use'
        })
      }
    })
    User.find((err, data) => {
      if (!err) {
        res.send({
          message: `${data}`
        })
        console.log(newUser.email)
      }
    })
  }
  // async register (req, res) {

  //   console.log(myData)
  //   try {
  //     // User()
  //     res.send({
  //       message: 'hellowow'
  //     })

  //     User.find((err, data) => {
  //       if (!err) {
  //         console.log(data)
  //       }
  //     })

  //     // res.send({
  //     //   message: 'req.body'
  //     // })
  //     // console.log(newUser)
  //     // newUser.save((err) => {
  //     //   if (!err) {
  //     //     console.log('success')
  //     //   } else {
  //     //     console.log(err)
  //     //   }
  //     // })
  //     // User.find((err, data) => {
  //     //   if (!err) {
  //     //     console.log(data)
  //     //   }
  //     // })
  //   } catch (err) {
  //     res.send({
  //       message: err
  //     })
  //   }
  // }
}
