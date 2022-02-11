import { typeDefs as schema } from '@typings/schema'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

const resolvers = {
  Query: {
    users: () => {
      return prisma.user.findMany(
      )
    },
    businesses: () => {
      return prisma.business.findMany();
    },
    comments: () => {
      return prisma.comment.findMany();
    },
    locations: () => {
      return prisma.location.findMany();
    },
    reviews: () => {
      return prisma.userReview.findMany();
    },
  },
}

app.register(mercurius, {
  schema,
  resolvers,
  context: (request, reply) => {
    return { prisma }
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
