import { typeDefs } from '@typings/apollo'
import { ApolloServer } from 'apollo-server'



const resolvers = {
  Query: {
    
  }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})