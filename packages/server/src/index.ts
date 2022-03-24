import typeDefs from '@futureproof/typings/schema'
import { makeExecutableSchema } from '@graphql-tools/schema'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import mercuriusCodegen from "mercurius-codegen"
import buildContext from './context'
import { resolvers } from './resolvers'
import cache from 'mercurius-cache'

export const app = Fastify({
  logger: process.env.NODE_ENV !== "test",
})

app.register(mercurius, {
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: buildContext,
  graphiql: process.env.NODE_ENV === 'development',
  jit: 1,
})

app.register(cache, {
  ttl: 10,
  all: true,
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
    targetPath: "../build/generated.ts",
  }).catch(console.error)

  start()
}