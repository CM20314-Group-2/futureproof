import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'

export default {
  Query: {
    reviews: (
      _parent: any,
      _args: any,
      context: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return context.prisma.review.findMany({
        ...select,
      })
    },
    review: (
      _parent: any,
      args: { idInput: number },
      context: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info).value
      return context.prisma.review.findUnique({
        where: { id: Number(args.idInput) },
        ...select,
      })
    },
  },
}
