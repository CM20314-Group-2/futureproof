import { Prisma } from '@prisma/client'
import { Context } from '@futureproof/server/src/context'

export const resolvers = {
    Query: {
        comments: (_parent: any, _args: any, context: Context) => {
            return context.prisma.comment.findMany();
        },

        comment: (_parent: any, args: { id: number }, context: Context) => {
            return context.prisma.comment.findUnique({
                where: { id: Number(args.id) || undefined },
            })
        },

        commentsByUser: (_parent: any, args: { idInput: number }, context: Context) => {
            return context.prisma.comment.findMany({
                where: { userId: Number(args.idInput) || undefined },
            })
        },

        commentsByBusiness: (_parent: any, args: { idInput: number }, context: Context) => {
            return context.prisma.comment.findMany({
                where: { businessId: Number(args.idInput)},
            })
        },
        //End of Queries
    },
    Mutation: {
        createComment: (_parent: any, args: { commentInput: Prisma.CommentCreateInput }, context: Context) => {
            return context.prisma.comment.create({
                data: {
                    text: args.commentInput.text,
                    createdAt: args.commentInput.createdAt,
                    location: args.commentInput.location,
                    user: args.commentInput.user,

                    business: args.commentInput.business
                }
            })
        },

        updateComment: (_parent: any, args: { id: number, commentInput: Prisma.CommentUpdateInput }, context: Context) => {
            return context.prisma.comment.update({
                data: {
                    text: args.commentInput.text,
                    createdAt: args.commentInput.createdAt,
                    location: args.commentInput.location,
                    user: args.commentInput.user,

                    business: args.commentInput.business
                },
                where: { id: args.id }
            })
        },

        deleteComment: (_parent: any, args: { id: number }, context: Context) => {
            return context.prisma.comment.delete({
                where: { id: Number(args.id) || undefined }
            })
        },
        //End of Mutations
    }
}