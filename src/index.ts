import { typeDefs } from '@typings/apollo'
import { ApolloServer } from 'apollo-server'
import {Business} from '@typings/types'

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
    users: () =>{
      return
    },
    businesses: () => businesses,

  },
}


const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})