import { readFileSync } from 'fs'
import { resolve } from 'path'

import { makeExecutableSchema } from 'graphql-tools'

import { resolveFunctions } from '../resolvers'

const peopleSchema = makeExecutableSchema({
  typeDefs: readFileSync(resolve(__dirname, './index.gql'), 'utf-8'),
  resolvers: resolveFunctions,
})

export { peopleSchema }
