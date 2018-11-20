
const AuthenticationController = require('./controllers/AuthenticationController')
require('./models/db')

module.exports = (app) => {
  app.post('/register', AuthenticationController.register)
}
