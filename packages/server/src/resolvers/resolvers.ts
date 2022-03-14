import { Prisma } from '@prisma/client'
import { Context } from '../context'

export const resolvers = {
  Query: {
    users: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.user.findMany()
    },
    businesses: (_parent: any, _args: any, context: Context) => {
      return context.prisma.business.findMany()
    },
    comments: async (context: Context) => {
      return context.prisma.comment.findMany()
    },
    locations: async (context: Context) => {
      return context.prisma.location.findMany()
    },
    reviews: async (context: Context) => {
      return context.prisma.review.findMany()
    },
    user: async (idInput: number, context: Context) => {
      return context.prisma.user.findUnique({
        where: { id: idInput },
      })
    },
    business: (_parent: any, args: { id: number }, context: Context) => {
      return context.prisma.business.findUnique({
        where: { id: Number(args.id) || undefined },
      })
    },
    comment: async (idInput: number, context: Context) => {
      return context.prisma.comment.findUnique({
        where: { id: idInput },
      })
    },
    location: async (idInput: number, context: Context) => {
      return context.prisma.location.findUnique({
        where: { id: idInput },
      })
    },
    review: async (idInput: number, context: Context) => {
      return context.prisma.review.findUnique({
        where: { id: idInput },
      })
    },
    userByEmail: async (emailInput: string, context: Context) => {
      return context.prisma.user.findFirst({
        where: { email: emailInput },
      })
    },
    businessByName: async (nameInput: string, context: Context) => {
      return context.prisma.business.findFirst({
        where: { name: nameInput },
      })
    },
    commentsByUser: async (idInput: number, context: Context) => {
      return context.prisma.comment.findMany({
        where: { userId: idInput },
      })
    },
    locationsByBusiness: async (idInput: number, context: Context) => {
      return context.prisma.location.findMany({
        where: { businessId: idInput },
      })
    },
    reviewsByUser: async (idInput: number, context: Context) => {
      return context.prisma.review.findMany({
        where: { userId: idInput },
      })
    },
    commentsByBusiness: async (idInput: number, context: Context) => {
      return context.prisma.comment.findMany({
        where: { businessId: idInput },
      })
    },
    reviewsByBusiness: async (idInput: number, context: Context) => {
      return context.prisma.review.findMany({
        where: { businessId: idInput },
      })
    },
  },

  Mutation: {
    createUser: async (userInput: Prisma.UserCreateInput, context: Context) => {
      return context.prisma.user.create({
        data: {
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          email: userInput.email,
          password: userInput.password,
          Comment: {},
          Review: {},

          // Data assignment is split by a blank line into required and optional.
          // The second block is optional data that does not need to be assigned in creation.
          roles: userInput.roles,
          profilePhoto: userInput.profilePhoto,
          Business: userInput.Business,
        },
      })
    },
    createBusiness: async (
      businessInput: Prisma.BusinessCreateInput,
      context: Context
    ) => {
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
          reviews: businessInput.reviews,
        },
      })
    },
    createLocation: async (
      locationInput: Prisma.LocationCreateInput,
      context: Context
    ) => {
      return context.prisma.location.create({
        data: {
          address: locationInput.address,
          createdAt: locationInput.createdAt,
          updatedAt: locationInput.updatedAt,

          longitude: locationInput.longitude,
          latitude: locationInput.latitude,
          businessName: locationInput.businessName,
          Business: locationInput.Business,
          Comment: locationInput.Comment,
        },
      })
    },
    createComment: async (
      commentInput: Prisma.CommentCreateInput,
      context: Context
    ) => {
      return context.prisma.comment.create({
        data: {
          text: commentInput.text,
          createdAt: commentInput.createdAt,
          location: commentInput.location,
          user: commentInput.user,

          business: commentInput.business,
        },
      })
    },
    createReview: async (
      reviewInput: Prisma.ReviewCreateInput,
      context: Context
    ) => {
      return context.prisma.review.create({
        data: {
          createdAt: reviewInput.createdAt,
          reputation: reviewInput.reputation,
          reviewData: reviewInput.reviewData,
          user: reviewInput.user,
          business: reviewInput.business,
        },
      })
    },
    updateUser: async (
      args: { id: number; userInput: Prisma.UserUpdateInput },
      context: Context
    ) => {
      return context.prisma.user.update({
        data: {
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email,
          password: args.userInput.password,
          Comment: {},
          Review: {},

          roles: args.userInput.roles,
          profilePhoto: args.userInput.profilePhoto,
          Business: args.userInput.Business,
        },
        where: { id: args.id },
      })
    },
    updateBusiness: async (
      args: { id: number; businessInput: Prisma.BusinessUpdateInput },
      context: Context
    ) => {
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
          reviews: args.businessInput.reviews,
        },
        where: { id: args.id },
      })
    },
    updateLocation: async (
      args: { id: number; locationInput: Prisma.LocationUpdateInput },
      context: Context
    ) => {
      return context.prisma.location.update({
        data: {
          address: args.locationInput.address,
          createdAt: args.locationInput.createdAt,
          updatedAt: args.locationInput.updatedAt,

          longitude: args.locationInput.longitude,
          latitude: args.locationInput.latitude,
          businessName: args.locationInput.businessName,
          Business: args.locationInput.Business,
          Comment: args.locationInput.Comment,
        },
        where: { id: args.id },
      })
    },
    updateComment: async (
      args: { id: number; commentInput: Prisma.CommentUpdateInput },
      context: Context
    ) => {
      return context.prisma.comment.update({
        data: {
          text: args.commentInput.text,
          createdAt: args.commentInput.createdAt,
          location: args.commentInput.location,
          user: args.commentInput.user,

          business: args.commentInput.business,
        },
        where: { id: args.id },
      })
    },
    updateReview: async (
      args: { id: number; reviewInput: Prisma.ReviewUpdateInput },
      context: Context
    ) => {
      return context.prisma.review.update({
        data: {
          createdAt: args.reviewInput.createdAt,
          reputation: args.reviewInput.reputation,
          reviewData: args.reviewInput.reviewData,
          user: args.reviewInput.user,
          business: args.reviewInput.business,
        },
        where: { id: args.id },
      })
    },
    deleteUser: async (id: number, context: Context) => {
      return context.prisma.user.delete({
        where: { id: id },
      })
    },
    deleteBusiness: async (id: number, context: Context) => {
      return context.prisma.business.delete({
        where: { id: id },
      })
    },
    deleteLocation: async (id: number, context: Context) => {
      return context.prisma.location.delete({
        where: { id: id },
      })
    },
    deleteComment: async (id: number, context: Context) => {
      return context.prisma.comment.delete({
        where: { id: id },
      })
    },
    deleteReview: async (id: number, context: Context) => {
      return context.prisma.review.delete({
        where: { id: id },
      })
    },
  },
}
