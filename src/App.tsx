import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import MapView from '@components/MapView'
import { StyleSheet, View } from 'react-native'
import SearchResultSorter from "@components/SearchResultSorter"

// Initialise Apollo Client
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/', // Server URL (must be absolute)
  cache: new InMemoryCache() // Cache
})

const App = () => {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <MapView/>
        <SearchResultSorter/>
      </View>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

export default App
