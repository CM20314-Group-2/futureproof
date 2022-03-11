import { Prisma } from '@prisma/client'
import { Context } from '@futureproof/server/src/context'

export const resolvers = {
    Query: {
        reviews: (_parent: any, _args: any, context: Context) => {
            return context.prisma.review.findMany()
        },

        review: (_parent: any, args: { idInput: number }, context: Context) => {
            return context.prisma.review.findUnique({
                where: { id: Number(args.idInput) },
            })
        },

        reviewsByUser: (_parent: any, args: { idInput: number }, context: Context) => {
            return context.prisma.review.findMany({
                where: { userId: Number(args.idInput) },
            })
        },

        reviewsByBusiness: (_parent: any, args: { idInput: number }, context: Context) => {
            return context.prisma.review.findMany({
                where: { businessId: Number(args.idInput) },
            })
        },

    }
}