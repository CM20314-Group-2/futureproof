import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import BusinessView from '@components/BusinessView'
import React from 'react'
import { StyleSheet, View } from 'react-native'

// Initialise Apollo Client
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/', // Server URL (must be absolute)
  cache: new InMemoryCache() // Cache
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <BusinessView/>
      </View>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

export default App
