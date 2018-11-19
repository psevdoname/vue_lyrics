const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// whats cors for
app.get('/status', (req, res) => {
  res.send({
    message: 'hellow orld'
  })
})

app.listen(3000)