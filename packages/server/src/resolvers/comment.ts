import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'
import { defaultFields } from './index'

export default {
  Query: {
    comments: (
      _parent: any,
      _args: any,
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info, { defaultFields }).value
      return prisma.comment.findMany({
        ...select,
      })
    },
    comment: (
      _parent: any,
      { id }: { id: number },
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info, { defaultFields }).value
      return prisma.comment.findUnique({
        where: { id: Number(id) || undefined },
        ...select,
      })
    },
  },
  Mutation: {
    createComment: (
      _parent: any,
      { commentInput }: { commentInput: Prisma.CommentCreateInput },
      { prisma }: Context
    ) => {
      return prisma.comment.create({
        data: {
          ...commentInput,
        },
      })
    },
    updateComment: (
      _parent: any,
      {
        id,
        commentInput,
      }: { id: number; commentInput: Prisma.CommentUpdateInput },
      { prisma }: Context
    ) => {
      return prisma.comment.update({
        data: {
          ...commentInput,
        },
        where: { id: Number(id) || undefined },
      })
    },
    deleteComment: (
      _parent: any,
      { id }: { id: number },
      { prisma }: Context
    ) => {
      return prisma.comment.delete({
        where: { id: Number(id) || undefined },
      })
    },
  },
}
