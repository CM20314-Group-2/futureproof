import { Prisma } from '@prisma/client'
import { Context } from '@futureproof/server/src/context'

export const resolvers = {
    Query: {
        businesses: (_parent: any, _args: any, context: Context) => {
            return context.prisma.business.findMany();
        },

        business: (_parent: any, args: { id: number }, context: Context) => {
            return context.prisma.business.findUnique({
                where: { id: Number(args.id) || undefined },
            })
        },

        businessByName: async (nameInput: string, context: Context) => {
            return context.prisma.business.findFirst({
                where: { name: nameInput }
            })
        },
        //End of Queries
    },

    Mutation: {
        createBusiness: (_parent: any, args: { businessInput: Prisma.BusinessCreateInput }, context: Context) => {
            return context.prisma.business.create({
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
                }
            })
        },

        updateBusiness: (_parent: any, args: { id: number, businessInput: Prisma.BusinessUpdateInput }, context: Context) => {
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

        deleteBusiness: (_parent: any, args: { id: number }, context: Context) => {
            return context.prisma.business.delete({
                where: { id: Number(args.id) || undefined }
            })
        },
        //End of Mutations
    }
}