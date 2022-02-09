import {Business} from '@typings/types'
import { typeDefs as schema } from '@typings/schema'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

const businesses : Pick<Business, 'name' | 'sustainabilityScore' | 'customerScore' | 'profilePicture' | 'profileText'>[] = [
    {
      name: "John",
      sustainabilityScore: 1.078,
      customerScore: 5.955,
      profilePicture: "Sample.JPEG",
      profileText: "John",
    }
  ]

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

/*
app.get('/', async function (req, reply) {
  // Get the query from the request body
  const query = '{ add(x: 2, y: 2) }'
  return reply.graphql(query)
})
*/

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
