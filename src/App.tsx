import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import BusinessView from '@components/BusinessView'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Stack = createNativeStackNavigator()

// Initialise Apollo Client
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/', // Server URL (must be absolute)
  cache: new InMemoryCache() // Cache
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {/* <SearchView/> */}
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
