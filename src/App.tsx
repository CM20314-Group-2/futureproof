import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import MapView from '@components/MapView'
import SearchView from '@components/SearchView'
import BusinessView from '@components/BusinessView'
import FutureProofRatingView from '@components/ratings/FutureProofRatingView'
import { Business, DisplayableBusiness, BusinessType, Location } from '@futureproof/typings'
import Constants from 'expo-constants'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const ExampleBusiness : DisplayableBusiness =  {
  id: '1',
  name: 'Starbucks',
  profileText: 'This is a test business and there is not that much to say about it.',
  sustainabilityScore: 80,
  customerScore: 65,
  type: BusinessType.Cafe,
  profilePicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
}

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
        {/* <SearchView/> */}
        {/*<BusinessView businessToDisplay={ExampleBusiness}/>*/}
        <FutureProofRatingView businessToDisplay={ExampleBusiness}/>
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
