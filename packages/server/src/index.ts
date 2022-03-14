// Imports to make the schema.
import typeDefs from "@futureproof/typings/schema"
import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers as businessResolvers } from '@resolvers/businessResolvers'
import { resolvers as commentResolvers } from "@resolvers/commentResolvers"
import { resolvers as locationResolvers } from "@resolvers/locationResolvers"
import { resolvers as reviewResolvers } from "@resolvers/reviewResolvers"
// Imports to help with resolver merge.
import { resolvers as userResolvers } from '@resolvers/userResolvers'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import mercuriusCodegen from "mercurius-codegen"
import prisma from './client'


import merge = require("lodash.merge")


export const app = Fastify({
  logger: process.env.NODE_ENV !== "test",
})

// Main app running script -> defines how the server runs(important).
app.register(mercurius, {
  schema: makeExecutableSchema({
     typeDefs, 
     resolvers : merge({}, userResolvers, businessResolvers, commentResolvers, locationResolvers, reviewResolvers) 
    }),
  context: (request, reply) => {
    return {prisma}
  },
  graphiql: true, //process.env.NODE_ENV === 'development',
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

// Generated types to help with testing.
if (process.env.NODE_ENV !== "test") {
  mercuriusCodegen(app, {
    targetPath: "../build/generated.ts",
  }).catch(console.error)

  start()
}