import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'

import * as mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/gqldemo')

const peopleSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  phone: String,
  hobby: String,
  lover: Number,
})
const People = mongoose.model('People', peopleSchema, 'people')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())

server.get('/people', (req, res, next) => {
  People.find((err, docs) => {
    res.send(docs)
  })
})

server.get('/', (req, res, next) => {
  res.send(JSON.stringify('hello'))
})

server.listen(3000, '0.0.0.0', () => {
  console.log('Server is running at http://localhost:3000')
})
