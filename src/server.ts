import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())

server.get('/', (req, res, next) => {
  res.send('hello, TypeScript™ based express')
})

server.listen(3000, '0.0.0.0', () => {
  console.log('Server is running at http://localhost:3000')
})
