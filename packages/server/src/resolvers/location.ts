import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'

export default {
  Query: {
    locations: (
      _parent: any,
      _args: any,
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return prisma.location.findMany({
        ...select,
      })
    },
    location: (
      _parent: any,
      { id }: { id: number },
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return prisma.location.findUnique({
        where: { id: Number(id) || undefined },
        ...select,
      })
    },
  },
  Mutation: {
    createLocation: async (
      _parent: any,
      { locationInput }: { locationInput: Prisma.LocationCreateInput },
      { prisma }: Context
    ) => {
      return prisma.location.create({
        data: {
          ...locationInput,
        },
      })
    },
    updateLocation: async (
      _parent: any,
      {
        id,
        locationInput,
      }: { id: number; locationInput: Prisma.LocationUpdateInput },
      { prisma }: Context
    ) => {
      return prisma.location.update({
        data: {
          ...locationInput,
        },
        where: { id: Number(id) || undefined },
      })
    },
    deleteLocation: async (
      _parent: any,
      { id }: { id: number },
      { prisma }: Context
    ) => {
      return prisma.location.delete({
        where: { id: id },
      })
    },
  },
}
