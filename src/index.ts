
import {PrismaClient, Prisma} from '@prisma/client'
// may not need to import prisma - but idk how to make
// sure input is valid.
import {typeDefs as schema} from '@typings/schema'
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
    user: (_parent, id: number) => {
      return prisma.user.findUnique({
        where: {id: id},
      })
    },
    business: (_parent, id: number) => {
      return prisma.business.findUnique({
        where: {id: id},
      })

      // schema has business id not being unique - fix?
      // apparently primary key is combination of name and id - why?
    },
    comment: (_parent, id: number) => {
      return prisma.comment.findUnique({
        where: {id: id},
      })
    },
    location: (_parent, id: number) => {
      return prisma.location.findUnique({
        where: {id: id},
      })
    },
    review: (_parent, id: number) => {
      return prisma.userReview.findUnique({
        where: {id: id},
      })
    },
    userByEmail: (_parent, emailInput: string) => {
      return prisma.user.findUnique({
        where: {email: emailInput}
      })
    },
    businessByName: (_parent, name: string) => {
      return prisma.business.findUnique({
        where: {name: name}
      })

    },
    commentsByUser: (_parent, id: number) => {
      return prisma.comment.findMany({
        where: {userId: id},
      })
    },
    locationsByBusiness: (_parent, id: number) => {
      return prisma.location.findMany({
        where: {businessId: id},
      })
    },
    reviewsByUser: (_parent, id: number) => {
      return prisma.userReview.findMany({
        where: {userId: id},
      })
    },
    commentsByBusiness: (_parent, id: number) => {
      return prisma.comment.findMany({
        where: {businessId: id},
      })
    },
    reviewsByBusiness: (_parent, id: number) => {
      return prisma.userReview.findMany({
        where: {businessId: id},
      })
    },
  },

  // There must be functionality to ensure that non-primary
  // keys that are still unique are not repeated

  Mutation: {
    createUser: (_parent, userInput: Prisma.UserCreateInput) => {
      return prisma.user.create({
        data: {
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          email: userInput.email,
          password: userInput.password,
          Comment: {},
          UserReview: {},
          // below here are optional (do i add them or not?)
          roles: userInput.roles,
          profilePhoto: userInput.profilePhoto,
          Business: userInput.Business
        }
      })
    },
    createBusiness: (_parent, businessInput: Prisma.BusinessCreateInput) => {
      return prisma.business.create({
        data: {
          name: businessInput.name,
          sustainabilityScore: businessInput.sustainabilityScore,
          customerScore: businessInput.customerScore,
          owner: businessInput.owner,
          createdAt: businessInput.createdAt,
          updatedAt: businessInput.updatedAt,

          ProfileText: businessInput.ProfileText,
          ProfilePicture: businessInput.ProfilePicture,
          type: businessInput.type,
          locationId: businessInput.locationId,
          primaryLocation: businessInput.primaryLocation,
          comments: businessInput.comments,
          reviews: businessInput.reviews
        }
      })
    },
    createLocation: (_parent, locationInput: Prisma.LocationCreateInput) => {
      return prisma.location.create({
        data: {
          address: locationInput.address,
          createdAt: locationInput.createdAt,
          updatedAt: locationInput.updatedAt,

          longitude: locationInput.longitude,
          latitude: locationInput.latitude,
          businessName: locationInput.businessName,
          Business: locationInput.Business,
          Comment: locationInput.Comment
        }
      })
    },
    createComment: (_parent, commentInput: Prisma.CommentCreateInput) => {
      return prisma.comment.create({
        data: {
          text: commentInput.text,
          createdAt: commentInput.createdAt,
          location: commentInput.location,
          user: commentInput.user,

          business: commentInput.business
        }
      })
    },
    createReview: (_parent, reviewInput: Prisma.UserReviewCreateInput) => {
      return prisma.userReview.create({
        data: {
          createdAt: reviewInput.createdAt,
          reputation: reviewInput.reputation,
          ReviewData: reviewInput.ReviewData,
          user: reviewInput.user,
          Business: reviewInput.Business
        }
      })
    },
    updateUser: (_parent, args: {id: number, userInput: Prisma.UserUpdateInput}) => {
      return prisma.user.update({
        data: {
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email,
          password: args.userInput.password,
          Comment: {},
          UserReview: {},
          // below here are optional (do i add them or not?)
          roles: args.userInput.roles,
          profilePhoto: args.userInput.profilePhoto,
          Business: args.userInput.Business
        },
        where: {id: args.id}
      })
    },
    updateBusiness: (_parent, args: {id: number, businessInput: Prisma.BusinessUpdateInput}) => {
      return prisma.business.update({
        data: {
          name: args.businessInput.name,
          sustainabilityScore: args.businessInput.sustainabilityScore,
          customerScore: args.businessInput.customerScore,
          owner: args.businessInput.owner,
          createdAt: args.businessInput.createdAt,
          updatedAt: args.businessInput.updatedAt,

          ProfileText: args.businessInput.ProfileText,
          ProfilePicture: args.businessInput.ProfilePicture,
          type: args.businessInput.type,
          locationId: args.businessInput.locationId,
          primaryLocation: args.businessInput.primaryLocation,
          comments: args.businessInput.comments,
          reviews: args.businessInput.reviews
        },
        where: {id: args.id}
      })
    },
    updateLocation: (_parent, args: {id: number, locationInput: Prisma.LocationUpdateInput}) => {
      return prisma.location.update({
        data: {
          address: args.locationInput.address,
          createdAt: args.locationInput.createdAt,
          updatedAt: args.locationInput.updatedAt,

          longitude: args.locationInput.longitude,
          latitude: args.locationInput.latitude,
          businessName: args.locationInput.businessName,
          Business: args.locationInput.Business,
          Comment: args.locationInput.Comment
        },
        where: {id: args.id}
      })
    },
    updateComment: (_parent, args: {id: number, commentInput: Prisma.CommentUpdateInput}) => {
      return prisma.comment.update({
        data: {
          text: args.commentInput.text,
          createdAt: args.commentInput.createdAt,
          location: args.commentInput.location,
          user: args.commentInput.user,

          business: args.commentInput.business
        },
        where: {id: args.id}
      })
    },
    updateReview: (_parent, args: {id: number, reviewInput: Prisma.UserReviewUpdateInput}) => {
      return prisma.userReview.update({
        data: {
          createdAt: args.reviewInput.createdAt,
          reputation: args.reviewInput.reputation,
          ReviewData: args.reviewInput.ReviewData,
          user: args.reviewInput.user,
          Business: args.reviewInput.Business
        },
        where: {id: args.id}
      })
    },
    deleteUser: (_parent, id: number) => {
      return prisma.user.delete({
        where: {id: id}
      })
    },
    deleteBusiness: (_parent, id: number) => {
      return prisma.business.delete({
        where: {id: id}
      })
    },
    deleteLocation: (_parent, id: number) => {
      return prisma.location.delete({
        where: {id: id}
      })
    },
    deleteComment: (_parent, id: number) => {
      return prisma.comment.delete({
        where: {id: id}
      })
    },
    deleteReview: (_parent, id: number) => {
      return prisma.userReview.delete({
        where: {id: id}
      })
    },
  },
}
// When i create a user, or update, how do IDs work?
app.register(mercurius, {
  schema,
  resolvers,
  context: (request, reply) => {
    return {prisma}
  },
  graphiql: true
})

/*
app.get('/', async function (req, reply) {
  // Get the query from the request body
  const query = '{add(x: 2, y: 2)}'
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