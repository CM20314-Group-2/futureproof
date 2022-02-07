import { typeDefs } from '@typings/apollo'
import { ApolloServer } from 'apollo-server'
import {Business} from '@typings/types'
import { context, Context } from './context'

// Simple Data for resolver
const businesses : Pick<Business, 'name' | 'sustainabilityScore' | 'customerScore' | 'profilePicture' | 'profileText'>[] = [
  {
    name: "John",
    sustainabilityScore: 1.078,
    customerScore: 5.955,
    profilePicture: "Sample.JPEG",
    profileText: "John",
  }
]

const resolvers = {
  Query: {
    users: (_parent, _args, context:Context) => {
      return context.prisma.user.findMany()
    },
    businesses: (_parent, _args, context:Context) => {
      return context.prisma.business.findMany();
    },
    comments: (_parent, _args, context:Context) => {
      return context.prisma.comment.findMany();
    },
    locations: (_parent, _args, context:Context) => {
      return context.prisma.location.findMany();
    },
    reviews: (_parent, _args, context:Context) => {
      return context.prisma.userReview.findMany();
    },
  },
}


const server = new ApolloServer({typeDefs, resolvers, context: context})

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})