import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'

export default {
  Query: {
    reviews: (
      _parent: any,
      _args: any,
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return prisma.review.findMany({
        ...select,
      })
    },
    review: (
      _parent: any,
      { id }: { id: number },
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return prisma.review.findUnique({
        where: { id: Number(id) || undefined },
        ...select,
      })
    },
  },
}
