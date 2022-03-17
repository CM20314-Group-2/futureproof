import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'

export default {
  Query: {
    comments: (
      _parent: any,
      _args: any,
      context: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return context.prisma.comment.findMany({
        ...select,
      })
    },

    comment: (
      _parent: any,
      args: { id: number },
      context: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return context.prisma.comment.findUnique({
        where: { id: Number(args.id) || undefined },
        ...select,
      })
    },
  },
  Mutation: {
    createComment: (
      _parent: any,
      args: { commentInput: Prisma.CommentCreateInput },
      context: Context
    ) => {
      return context.prisma.comment.create({
        data: {
          text: args.commentInput.text,
          createdAt: args.commentInput.createdAt,
          location: args.commentInput.location,
          user: args.commentInput.user,

          business: args.commentInput.business,
        },
      })
    },

    updateComment: (
      _parent: any,
      args: { id: number; commentInput: Prisma.CommentUpdateInput },
      context: Context
    ) => {
      return context.prisma.comment.update({
        data: {
          text: args.commentInput.text,
          createdAt: args.commentInput.createdAt,
          location: args.commentInput.location,
          user: args.commentInput.user,

          business: args.commentInput.business,
        },
        where: { id: args.id },
      })
    },

    deleteComment: (_parent: any, args: { id: number }, context: Context) => {
      return context.prisma.comment.delete({
        where: { id: Number(args.id) || undefined },
      })
    },
    //End of Mutations
  },
}
