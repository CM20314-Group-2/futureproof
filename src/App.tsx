import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import MapView from '@components/MapView'
//import SearchView from '@components/SearchView'
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
    backgroundColor: '#fff',
    flex: 1
  },
})

export default App
