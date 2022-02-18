
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
        where: { UserID: id },
      })
    },
    business: (_parent, id : number) => {
      return prisma.business.findFirst({
        where: { BusinessID : id},
      })

      // schema has business id not being unique - fix?
      // apparently primary key is combination of name and id - why?
    },
    comment: (_parent, id : number) => {
      return prisma.comment.findUnique({
        where: { CommentID: id },
      })
    },
    location: (_parent, id : number) => {
      return prisma.location.findUnique({
        where: { LocationID: id },
      })
    },
    review: (_parent, id : number) => {
      return prisma.userReview.findUnique({
        where: { ReviewID: id },
      })
    },
    userByEmail: (_parent, email : string) => {
      return prisma.user.findFirst({
        where: { Email: email },
        // findUnique seems to only work when searching for
        // an object by its type's primary key.
      })
    },
    businessByName: (_parent, name : string) => {
      return prisma.business.findFirst({
        where: { Name: name },
      })

    },
    commentsByUser: (_parent, id : number) => {
      return prisma.comment.findFirst({
        where: { UserID: id },
      })
    },
    locationsByBusiness: (_parent, id : number) => {
      return prisma.location.findFirst({
        where: { BusinessID: id },
      })
    },
    reviewsByUser: (_parent, id : number) => {
      return prisma.userReview.findFirst({
        where: { UserID: id },
      })
    },
    commentsByBusiness: (_parent, id : number) => {
      return prisma.comment.findFirst({
        where: { BusinessID: id },
      })
    },
    reviewsByBusiness: (_parent, id : number) => {
      return prisma.userReview.findFirst({
        where: { BusinessID: id },
      })
    },
  },

  // There must be functionality to ensure that non-primary
  // keys that are still unique are not repeated

  Mutation: {
    createUser: (_parent, userInput : Prisma.UserCreateInput) => {
      return prisma.user.create({
        data : {
          UserID: userInput.UserID,
          FirstName: userInput.FirstName,
          LastName: userInput.LastName,
          Email: userInput.Email,
          Password: userInput.Password,
          AccountType: userInput.AccountType,
          // For above and below, how to assign default?
          ProfilePic: userInput.ProfilePic,
        }
      })
    },
    createBusiness: (_parent, businessInput : Prisma.BusinessCreateInput) => {
      return prisma.business.create({
        data : {
          BusinessID : businessInput.BusinessID,
          FirstName: userInput.FirstName,
          LastName: userInput.LastName,
          Email: userInput.Email,
          Password: userInput.Password,
          AccountType: userInput.AccountType,
          // For above and below, how to assign default?
          ProfilePic: userInput.ProfilePic,
        }
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
}
// When i create a user, or update, how do IDs work?
