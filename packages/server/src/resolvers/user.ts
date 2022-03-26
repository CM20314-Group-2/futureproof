import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'
import { defaultFields } from './index'

export default {
  Query: {
    users: (
      _parent: any,
      _args: any,
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info, { defaultFields }).value
      return prisma.user.findMany({
        ...select,
      })
    },
    user: (
      _parent: any,
      { id }: { id: number },
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info, { defaultFields }).value
      return prisma.user.findUnique({
        where: { id: Number(id) || undefined },
        ...select,
      })
    },
    userByEmail: (
      _parent: any,
      { email }: { email: string },
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info, { defaultFields }).value
      return prisma.user.findFirst({
        where: { email },
        ...select,
      })
    },
  },
  Mutation: {
    createUser: (
      _parent: any,
      { userInput }: { userInput: Prisma.UserCreateInput },
      { prisma }: Context
    ) => {
      return prisma.user.create({
        data: {
          ...userInput,
        },
      })
    },
    updateUser: (
      _parent: any,
      { id, userInput }: { id: number; userInput: Prisma.UserUpdateInput },
      { prisma }: Context
    ) => {
      return prisma.user.update({
        data: {
          ...userInput,
        },
        where: { id: Number(id) || undefined },
      })
    },
    deleteUser: (_parent: any, { id }: { id: number }, { prisma }: Context) => {
      return prisma.user.delete({
        where: { id: Number(id) || undefined },
      })
    },
  },
}
