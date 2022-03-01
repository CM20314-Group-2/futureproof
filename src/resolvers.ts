import {Prisma} from '@prisma/client'

export const resolvers = {
  Query: {
    users: async (context) => {
      return context.prisma.user.findMany()
    },
    businesses: async (context) => {
      return context.prisma.business.findMany()
    },
    comments: async (context) => {
      return context.prisma.comment.findMany()
    },
    locations: async (context) => {
      return context.prisma.location.findMany()
    },
    reviews: async (context) => {
      return context.prisma.userReview.findMany()
    },
    user: async (_parent, id: number, context) => {
      return context.prisma.user.findUnique({
        where: { id: id },
      })
    },
    business: async (_parent, id: number, context) => {
      return context.prisma.business.findUnique({
        where: { id: id },
      })
    },
    comment: async (_parent, id: number, context) => {
      return context.prisma.comment.findUnique({
        where: { id: id },
      })
    },
    location: async (_parent, id: number, context) => {
      return context.prisma.location.findUnique({
        where: { id: id },
      })
    },
    review: async (_parent, id: number, context) => {
      return context.prisma.userReview.findUnique({
        where: { id: id },
      })
    },
    userByEmail: async (_parent, emailInput: string, context) => {
      return context.prisma.user.findUnique({
        where: { email: emailInput }
      })
    },
    businessByName: async (_parent, name: string, context) => {
      return context.prisma.business.findUnique({
        where: { name: name }
      })

    },
    commentsByUser: async (_parent, id: number, context) => {
      return context.prisma.comment.findMany({
        where: { userId: id },
      })
    },
    locationsByBusiness: async (_parent, id: number, context) => {
      return context.prisma.location.findMany({
        where: { businessId: id },
      })
    },
    reviewsByUser: async (_parent, id: number, context) => {
      return context.prisma.userReview.findMany({
        where: { userId: id },
      })
    },
    commentsByBusiness: async (_parent, id: number, context) => {
      return context.prisma.comment.findMany({
        where: { businessId: id },
      })
    },
    reviewsByBusiness: async (_parent, id: number, context) => {
      return context.prisma.userReview.findMany({
        where: { businessId: id },
      })
    },
  },

  Mutation: {
    createUser: async (_parent, userInput: Prisma.UserCreateInput, context) => {
      return context.prisma.user.create({
        data: {
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          email: userInput.email,
          password: userInput.password,
          Comment: {},
          UserReview: {},

          // Data assignment is split by a blank line into required and optional.
          // The second block is optional data that does not need to be assigned in creation.
          roles: userInput.roles,
          profilePhoto: userInput.profilePhoto,
          Business: userInput.Business
        }
      })
    },
    createBusiness: async (_parent, businessInput: Prisma.BusinessCreateInput, context) => {
      return context.prisma.business.create({
        data: {
          name: businessInput.name,
          sustainabilityScore: businessInput.sustainabilityScore,
          customerScore: businessInput.customerScore,
          owner: businessInput.owner,
          createdAt: businessInput.createdAt,
          updatedAt: businessInput.updatedAt,

          profileText: businessInput.profileText,
          profilePicture: businessInput.profilePicture,
          type: businessInput.type,
          locationId: businessInput.locationId,
          primaryLocation: businessInput.primaryLocation,
          comments: businessInput.comments,
          reviews: businessInput.reviews
        }
      })
    },
    createLocation: async (_parent, locationInput: Prisma.LocationCreateInput, context) => {
      return context.prisma.location.create({
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
    createComment: async (_parent, commentInput: Prisma.CommentCreateInput, context) => {
      return context.prisma.comment.create({
        data: {
          text: commentInput.text,
          createdAt: commentInput.createdAt,
          location: commentInput.location,
          user: commentInput.user,

          business: commentInput.business
        }
      })
    },
    createReview: async (_parent, reviewInput: Prisma.ReviewCreateInput, context) => {
      return context.prisma.userReview.create({
        data: {
          createdAt: reviewInput.createdAt,
          reputation: reviewInput.reputation,
          reviewData: reviewInput.reviewData,
          user: reviewInput.user,
          business: reviewInput.business
        }
      })
    },
    updateUser: async (_parent, args: { id: number, userInput: Prisma.UserUpdateInput }, context) => {
      return context.prisma.user.update({
        data: {
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email,
          password: args.userInput.password,
          Comment: {},
          UserReview: {},
          
          roles: args.userInput.roles,
          profilePhoto: args.userInput.profilePhoto,
          Business: args.userInput.Business
        },
        where: { id: args.id }
      })
    },
    updateBusiness: async (_parent, args: { id: number, businessInput: Prisma.BusinessUpdateInput }, context) => {
      return context.prisma.business.update({
        data: {
          name: args.businessInput.name,
          sustainabilityScore: args.businessInput.sustainabilityScore,
          customerScore: args.businessInput.customerScore,
          owner: args.businessInput.owner,
          createdAt: args.businessInput.createdAt,
          updatedAt: args.businessInput.updatedAt,

          profileText: args.businessInput.profileText,
          profilePicture: args.businessInput.profilePicture,
          type: args.businessInput.type,
          locationId: args.businessInput.locationId,
          primaryLocation: args.businessInput.primaryLocation,
          comments: args.businessInput.comments,
          reviews: args.businessInput.reviews
        },
        where: { id: args.id }
      })
    },
    updateLocation: async (_parent, args: { id: number, locationInput: Prisma.LocationUpdateInput }, context) => {
      return context.prisma.location.update({
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
        where: { id: args.id }
      })
    },
    updateComment: async (_parent, args: { id: number, commentInput: Prisma.CommentUpdateInput }, context) => {
      return context.prisma.comment.update({
        data: {
          text: args.commentInput.text,
          createdAt: args.commentInput.createdAt,
          location: args.commentInput.location,
          user: args.commentInput.user,

          business: args.commentInput.business
        },
        where: { id: args.id }
      })
    },
    updateReview: async (_parent, args: { id: number, reviewInput: Prisma.ReviewUpdateInput }, context) => {
      return context.prisma.userReview.update({
        data: {
          createdAt: args.reviewInput.createdAt,
          reputation: args.reviewInput.reputation,
          ReviewData: args.reviewInput.reviewData,
          user: args.reviewInput.user,
          Business: args.reviewInput.business
        },
        where: { id: args.id }
      })
    },
    deleteUser: async (_parent, id: number, context) => {
      return context.prisma.user.delete({
        where: { id: id }
      })
    },
    deleteBusiness: async (_parent, id: number, context) => {
      return context.prisma.business.delete({
        where: { id: id }
      })
    },
    deleteLocation: async (_parent, id: number, context) => {
      return context.prisma.location.delete({
        where: { id: id }
      })
    },
    deleteComment: async (_parent, id: number, context) => {
      return context.prisma.comment.delete({
        where: { id: id }
      })
    },
    deleteReview: async (_parent, id: number, context) => {
      return context.prisma.userReview.delete({
        where: { id: id }
      })
    }
  }
}