import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'

import { peopleSchema } from './schemas'

mongoose.connect('mongodb://localhost/gqldemo')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())
server.use('/api', graphqlExpress({
  schema: peopleSchema
}))
if (process.env.NODE_ENV !== 'production') {
  server.use('/graphiql', graphiqlExpress({
    endpointURL: '/api',
  }))
}
// server.get('/people', (req, res, next) => {
//   People.find((err, docs) => {
//     res.send(docs)
//   })
// })

server.get('/', (req, res, next) => {
  res.send(JSON.stringify('hello'))
})

server.listen(3000, '0.0.0.0', () => {
  console.log('Server is running at http://localhost:3000')
})
