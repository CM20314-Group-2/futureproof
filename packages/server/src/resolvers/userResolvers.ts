import { Prisma } from '@prisma/client'
import { Context } from '@futureproof/server/src/context'

export const resolvers = {
  Query: {
    users: (_parent: any, _args: any, context: Context) => {
      return context.prisma.user.findMany();
    },

    user: (_parent: any, args: { id: number }, context: Context) => {
      return context.prisma.user.findUnique({
        where: { id: Number(args.id) || undefined },
      })
    },

    userByEmail: (_parent: any, args: { emailInput: string }, context: Context) => {
      return context.prisma.user.findFirst({
        where: { email: args.emailInput || undefined }
      })
    },
    //End of Queries
  },
  Mutation: {
    createUser: (_parent: any, args: { userInput: Prisma.UserCreateInput }, context: Context) => {
      return context.prisma.user.create({
        data: {
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email,
          password: args.userInput.password,
          Comment: {},
          Review: {},

          // Data assignment is split by a blank line into required and optional.
          // The second block is optional data that does not need to be assigned in creation.
          roles: args.userInput.roles,
          profilePhoto: args.userInput.profilePhoto,
          Business: args.userInput.Business
        }
      })
    },

    updateUser: (_parent: any, args: { id: number, userInput: Prisma.UserUpdateInput }, context: Context) => {
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
          Business: args.userInput.Business
        },
        where: { id: args.id }
      })
    },

    deleteUser: (_parent : any, args : {id: number}, context: Context) => {
      return context.prisma.user.delete({
        where: { id: Number(args.id) }
      })
    },
    //End of Mutations
  }
}