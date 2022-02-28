import {PrismaClient} from '@prisma/client'
import {typeDefs} from '@typings/schema'
import {resolvers} from './resolvers'
import Fastify from 'fastify'
import mercurius from 'mercurius'
//import {Context} from './context'
import {makeExecutableSchema}  from '@graphql-tools/schema'

const app = Fastify()
const prisma = new PrismaClient()

app.register(mercurius, {
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: (request, reply) => {
    return {prisma}
  },
  graphiql: true
})

const start = async () => {
  try {
    await app.listen(3000)
    console.log('Listening on 3000...')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()