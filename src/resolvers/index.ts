import { IResolvers } from "mercurius"
import buildContext from "../context"
import { Business, Comment, Location, Review, User } from "../generated"

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T

declare module "mercurius" {
  interface MercuriusContext
    extends PromiseType<ReturnType<typeof buildContext>> {}
}

const resolvers: IResolvers = {
  Query: {
    users: async (_, _args, { prisma }) => {
      return (await prisma.user.findMany()) as unknown as User[]
    },
    businesses: (_, _args, { prisma }) => {
      return prisma.business.findMany() as unknown as Business[]
    },
    comments: (_, _args, { prisma }) => {
      return prisma.comment.findMany() as unknown as Comment[]
    },
    locations: (_, _args, { prisma }) => {
      return prisma.location.findMany() as unknown as Location[]
    },
    reviews: (_, _args, { prisma }) => {
      return prisma.userReview.findMany() as unknown as Review[]
    },
  },
}

export default resolvers
