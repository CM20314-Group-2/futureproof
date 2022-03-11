import typeDefs from "@futureproof/typings/schema"
import prisma from './client'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import mercuriusCodegen from "mercurius-codegen"
import {makeExecutableSchema}  from '@graphql-tools/schema'

// Imports to help with resolver merge.
import { resolvers as userResolvers } from './resolvers/userResolvers'
import { resolvers as businessResolvers } from './resolvers/businessResolvers'
import { resolvers as commentResolvers } from "./resolvers/commentResolvers"
import merge = require("lodash.merge")


export const app = Fastify({
  logger: process.env.NODE_ENV !== "test",
})

// Main app running script -> defines how the server runs(important).
app.register(mercurius, {
  schema: makeExecutableSchema({
     typeDefs, 
     resolvers : merge({}, userResolvers, businessResolvers, commentResolvers) 
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

if (process.env.NODE_ENV !== "test") {
  mercuriusCodegen(app, {
    targetPath: "./merCodegen/generated.ts",
  }).catch(console.error)

  start()
}