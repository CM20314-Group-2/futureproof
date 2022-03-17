import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'

export default {
  Query: {
    locations: (
      _parent: any,
      _args: any,
      context: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return context.prisma.location.findMany({
        ...select,
      })
    },
    location: (
      _parent: any,
      args: { idInput: number },
      context: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return context.prisma.location.findUnique({
        where: { id: Number(args.idInput) },
        ...select,
      })
    },
  },

  Mutation: {
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
          business: locationInput.business,
          Comment: locationInput.Comment,
        },
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
          business: args.locationInput.business,
          Comment: args.locationInput.Comment,
        },
        where: { id: args.id },
      })
    },

    deleteLocation: async (id: number, context: Context) => {
      return context.prisma.location.delete({
        where: { id: id },
      })
    },
    //End of mutations
  },
}
