import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MapView from '@components/MapView'
import MapSlideUpSheet from '@components/MapSlideUpSheet'
import AccountView from '@components/AccountView'
import AccountButton from './components/AccountButton'
import BusinessView from '@components/BusinessViews/BusinessView'
import React from 'react'
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import SearchView from '@components/SearchView'
import FutureProofRatingView from '@components/ratings/FutureProofRatingView'
import { Business, DisplayableBusiness, BusinessType, Location } from '@futureproof/typings'
import Constants from 'expo-constants'

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
  business: Pick<Business, 'sustainabilityScore'>
}

// Initialise Apollo Client
const client = new ApolloClient({
  uri: `${Constants.manifest?.extra?.serverAddress}`, // Server URL (must be absolute)
  cache: new InMemoryCache(), // Cache
})

type RootStackParamList = {
  MapView: undefined
  AccountView: undefined
}

// Initialise Stack Navigator
const Stack = createStackNavigator<RootStackParamList>()

type Props = StackScreenProps<RootStackParamList>


export const FeedScreen = ({ navigation }: Props) => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <MapView />
        <SafeAreaView>
          <TouchableOpacity onPress={() => navigation.push('AccountView')}>
            <AccountButton />
          </TouchableOpacity>
        </SafeAreaView>
        <MapSlideUpSheet parentData={navigation} />
      </View>
    </ApolloProvider>
  )
}

/*
export const FeedScreen = ({ navigation }: Props) => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <BusinessView businessToDisplay={ExampleBusiness}/>
      </View>
    </ApolloProvider>
  )
}
*/


export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MapView'
        component={FeedScreen}
        options={{ title: 'Map', headerShown: false }}
      />
      <Stack.Screen
        name='AccountView'
        component={AccountView}
        options={{ title: 'Account Settings' }}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})

export default App
