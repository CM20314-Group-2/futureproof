import {PrismaClient} from '@prisma/client'
import {typeDefs} from '@typings/schema'
import {resolvers} from './resolvers'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import mercuriusCodegen from "mercurius-codegen"
import {makeExecutableSchema}  from '@graphql-tools/schema'

export const app = Fastify({
  logger: process.env.NODE_ENV !== "test",
})

const prisma = new PrismaClient()

app.register(mercurius, {
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: (request, reply) => {
    return {prisma}
  },
  graphiql: process.env.NODE_ENV === 'development',
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

if (process.env.NODE_ENV !== "test") {
  mercuriusCodegen(app, {
    targetPath: "./src/generated.ts",
  }).catch(console.error)

  start()
}