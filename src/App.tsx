import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import SearchView from '@components/SearchView'
import { Business, Location } from '@futureproof/typings'
import Constants from 'expo-constants'
import React from 'react'
import { StyleSheet, View } from 'react-native'

interface LocationType extends Pick<Location, 'latitude'> {
  business : Pick<Business, 'sustainabilityScore'>
}

// Initialise Apollo Client
const client = new ApolloClient({
  uri: `${Constants.manifest?.extra?.serverAddress}`, // Server URL (must be absolute)
  cache: new InMemoryCache() // Cache
})

const App = () => {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {/* <MapView/> */}
        <SearchView/>
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
