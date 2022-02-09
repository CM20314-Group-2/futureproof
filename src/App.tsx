import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import MapView from '@components/MapView'
import SearchView from '@components/SearchView'
import BusinessView from '@components/BusinessView'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Initialise Apollo Client
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/', // Server URL (must be absolute)
  cache: new InMemoryCache() // Cache
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <SearchView/>
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
