import { Prisma } from '@prisma/client'
import { Context } from '@futureproof/server/src/context'

export const resolvers = {
    Query: {
        locations: (_parent:any, _args:any, context: Context) => {
            return context.prisma.location.findMany()
        },

        location: (_parent:any, args: { idInput: number }, context: Context) => {
            return context.prisma.location.findUnique({
                where: { id: Number(args.idInput) },
            })
        },

        locationsByBusiness: (_parent: any, args: { idInput: number }, context: Context) => {
            return context.prisma.location.findMany({
                where: { businessId: Number(args.idInput) },
            })
        },
        //End of queries
    },

    Mutation: {
        createLocation: async (locationInput: Prisma.LocationCreateInput, context: Context) => {
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

        updateLocation: async (args: { id: number, locationInput: Prisma.LocationUpdateInput }, context: Context) => {
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

        deleteLocation: async (id: number, context: Context) => {
            return context.prisma.location.delete({
                where: { id: id }
            })
        },
        //End of mutations
    }
}