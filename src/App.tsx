import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import BusinessView from '@components/BusinessView'
import SearchView from '@components/SearchView'
import FutureProofRatingView from '@components/ratings/FutureProofRatingView'
import MapView from '@components/MapView'
import React from 'react'
import { StyleSheet, View } from 'react-native'

// Initialise Apollo Client
const client = new ApolloClient({
  uri: 'http//localhost:3000', // Server URL (must be absolute)
  cache: new InMemoryCache() // Cache
})

const App = () => {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <MapView/>
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
