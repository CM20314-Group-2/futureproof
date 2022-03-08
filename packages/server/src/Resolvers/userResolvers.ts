import {Prisma} from '@prisma/client'
import {Context} from "@futureproof/server/src/context"

export const resolvers = {
    Query:{
        users: async (context: Context) => {
            return context.prisma.user.findMany()
          },
    
        user: async (idInput: number, context: Context) => {
            return context.prisma.user.findUnique({
                where: { id: idInput },
            })
          },
        
        userByEmail: async (emailInput: string, context: Context) => {
            return context.prisma.user.findFirst({
              where: { email: emailInput }
            })
          },
    },
    
    Mutation:{
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
                Business: userInput.Business
              }
            })
          },

          updateUser: async (args: { id: number, userInput: Prisma.UserUpdateInput }, context: Context) => {
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
          
          deleteUser: async (id: number, context: Context) => {
            return context.prisma.user.delete({
              where: { id: id }
            })
          },
           
    },

}