
import { PrismaClient, Prisma} from '@prisma/client'
// may not need to import prisma - but idk how to make
// sure input is valid.
import { typeDefs as schema } from '@typings/schema'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import {Context} from './context'

const prisma = new PrismaClient()
const app = Fastify()

//_parent, _args, context: Context
// Use this if context includes prismaclient
const resolvers = {
  Query: {
    users: () => {
      return prisma.user.findMany()
    },
    businesses: () => {
      return prisma.business.findMany()
    },
    comments: () => {
      return prisma.comment.findMany()
    },
    locations: () => {
      return prisma.location.findMany()
    },
    reviews: () => {
      return prisma.userReview.findMany()
    },
    user: (_parent, id : number) => {
      return prisma.user.findUnique({
        where: { id: id },
      })
    },
    business: (_parent, id : number) => {
      return prisma.business.findUnique({
        where: { id: id },
      })

      // schema has business id not being unique - fix?
      // apparently primary key is combination of name and id - why?
    },
    comment: (_parent, id : number) => {
      return prisma.comment.findUnique({
        where: { id: id },
      })
    },
    location: (_parent, id : number) => {
      return prisma.location.findUnique({
        where: { id: id },
      })
    },
    review: (_parent, id : number) => {
      return prisma.userReview.findUnique({
        where: { id: id },
      })
    },
    userByEmail: (_parent, emailInput : string) => {
      return prisma.user.findUnique({
        where: { email: emailInput}
      })
    },
    businessByName: (_parent, name : string) => {
      return prisma.business.findUnique({
        where: { name: name }
      })

    },
    commentsByUser: (_parent, id : number) => {
      return prisma.comment.findMany({
        where: { userId: id },
      })
    },
    locationsByBusiness: (_parent, id : number) => {
      return prisma.location.findMany({
        where: { businessId: id },
      })
    },
    reviewsByUser: (_parent, id : number) => {
      return prisma.userReview.findMany({
        where: { userId: id },
      })
    },
    commentsByBusiness: (_parent, id : number) => {
      return prisma.comment.findMany({
        where: { businessId: id },
      })
    },
    reviewsByBusiness: (_parent, id : number) => {
      return prisma.userReview.findMany({
        where: { businessId: id },
      })
    },
  },

  // There must be functionality to ensure that non-primary
  // keys that are still unique are not repeated

  /*
  Mutation: {
    createUser: (_parent, userInput : Prisma.UserCreateInput) => {
      return prisma.user.create({
        data : {
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          email: userInput.email,
          password: userInput.password,
          // below here are optional (do i add)
          roles: userInput.roles,
          profilePhoto: userInput.profilePhoto,
        }
      })
    },
    createBusiness: (_parent, businessInput : Prisma.BusinessCreateInput) => {
      return prisma.business.create({
        data : {
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          email: userInput.email,
          password: userInput.password,
          roles: userInput.roles,
          profilePhoto: userInput.profilePhoto,
        }
      })
    },
    updateUser: (_parent, args : {id : number, userInput : Prisma.UserUpdateInput}) => {
      return prisma.user.update({
        data : {
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email,
          password: args.userInput.password,
          roles: args.userInput.roles,
          profilePhoto: args.userInput.profilePhoto,
        },
        where : { id: args.id }
      })
    },
    deleteUser: (_parent, id : number) => {
      return prisma.user.delete({
        where : { UserID : id }
      })
    },
    updateUser: (_parent, args : {id : number, userInput : Prisma.UserUpdateInput}) => {
      return prisma.user.update({
        data : {
          UserID: args.userInput.UserID,
          FirstName: args.userInput.FirstName,
          LastName: args.userInput.LastName,
          Email: args.userInput.Email,
          Password: args.userInput.Password,
          AccountType: args.userInput.AccountType,
          // For above and below, how to assign default?
          ProfilePic: args.userInput.ProfilePic,
        },
        where : { UserID : args.id }
      })
    },
    deleteUser: (_parent, id : number) => {
      return prisma.user.delete({
        where : { UserID : id }
      })
    },
  },
  */
}
// When i create a user, or update, how do IDs work?
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