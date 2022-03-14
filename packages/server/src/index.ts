import typeDefs from '@futureproof/typings/schema'
import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from '@resolvers'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import cache from 'mercurius-cache'
import mercuriusCodegen from 'mercurius-codegen'
import buildContext from './context'

export const app = Fastify()

// Add mercurius to server
app.register(mercurius, {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  context: buildContext,
  graphiql: true, //process.env.NODE_ENV === 'development',
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

// Generate types
if (process.env.NODE_ENV !== 'test') {
  mercuriusCodegen(app, {
    targetPath: '../build/generated.ts',
  }).catch(console.error)

  start()
}
