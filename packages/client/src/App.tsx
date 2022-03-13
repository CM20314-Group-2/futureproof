import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import AccountView from '@components/AccountView'
import MapSlideUpSheet from '@components/MapSlideUpSheet'
import MapView from '@components/MapView'
import DistanceRadiusSelector, { DISTANCES, INITIAL_DISTANCE_INDEX } from '@components/SortSearchResults/DistanceRadiusSelector'
import SearchResultSorter from '@components/SortSearchResults/SearchResultSorter'
import { Business, BusinessType, DisplayableBusiness, Location } from '@futureproof/typings'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import Constants from 'expo-constants'
import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import AccountButton from '@components/AccountButton'
import { Option } from '@components/SortSearchResults/OptionList'

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
  uri: `${Constants.manifest?.extra?.serverAddress}/graphql`, // Server URL (must be absolute)
  cache: new InMemoryCache() // Cache
})

type RootStackParamList = {
  MapView : undefined
  AccountView : undefined
}

// Initialise Stack Navigator
const Stack = createStackNavigator<RootStackParamList>()

type Props = StackScreenProps<RootStackParamList>


export const FeedScreen = ({ navigation } : Props) => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {/* <MapView showRadius /> */}
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
  const [distance, setDistance] = useState<Option>(DISTANCES[INITIAL_DISTANCE_INDEX])

  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
    <ApolloProvider client={client}>
      <MapView showRadius={true} radiusSize={distance.value as number}/>
      <DistanceRadiusSelector
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonText}
        onButtonPress={(selectedOption : Option) => setDistance(selectedOption)}
      />
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1ea853',
    borderColor: '#188441',
    borderRadius: 25,
    borderWidth: 2,
    height: 25,
    justifyContent: 'center',
    left: 15,
    top: -Dimensions.get('screen').height + 85,
    width: 80
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})

export default App
