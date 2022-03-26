import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from '@apollo/client'
import AccountButton from '@components/account/AccountButton/AccountButton'
import HelpView from '@components/account/AccountSubViews/HelpView'
import PasswordView from '@components/account/AccountSubViews/PasswordView'
import PPView from '@components/account/AccountSubViews/PPView'
import ToSView from '@components/account/AccountSubViews/ToSView'
import AccountView from '@components/account/AccountView/AccountView'
import BusinessView from '@components/business/BusinessView/BusinessView'
import { Option } from '@components/common/OptionList'
import DistanceRadiusSelector, { DISTANCES, INITIAL_DISTANCE_INDEX } from '@components/maps/DistanceRadiusSelector'
import MapSlideUpSheet from '@components/maps/MapSlideUpSheet'
import MapView from '@components/maps/MapView'
import { Business, DisplayableBusiness, Location } from '@futureproof/typings'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import Constants from 'expo-constants'
import React, { useState } from 'react'
import {
  Dimensions,
  Platform, SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'

const GET_COORDINATES = gql `
  query {
    locations {
      id
      latitude
      longitude
      business {
        sustainabilityScore
      }
    }
  }`

export type LocationType = Pick<Location, 'latitude' | 'longitude' | 'id'>;

export interface LocationTypeWithRating extends LocationType {
  business : Pick<Business, 'sustainabilityScore'>
}

// Initialise Apollo Client
const client = new ApolloClient({
  uri: `${Constants.manifest?.extra?.serverAddress}/graphql`, // Server URL (must be absolute)
  cache: new InMemoryCache(), // Cache
})

const width = Dimensions.get('window').width

export type RootStackParams = {
  MapView : undefined
  AccountView : undefined
  PasswordView : undefined
  PPView : undefined
  ToSView : undefined
  HelpView : undefined
  BusinessView : { businessToDisplay : DisplayableBusiness }
}

// Initialise Stack Navigator
const Stack = createStackNavigator<RootStackParams>()

type Props = StackScreenProps<RootStackParams>

export const FeedScreen = ({ navigation } : Props) => {


  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <MapComponent />
        <SafeAreaView>
          <TouchableOpacity
            onPress={() => navigation.push('AccountView')}
            style={styles.button}
          >
            <AccountButton />
          </TouchableOpacity>
        </SafeAreaView>
        <MapSlideUpSheet navigationProp={navigation} />
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
      <Stack.Screen
        name='PasswordView'
        component={PasswordView}
        options={{ title: 'Change Password' }}
      />
      <Stack.Screen
        name='PPView'
        component={PPView}
        options={{ title: 'Privacy Policy' }}
      />
      <Stack.Screen
        name='ToSView'
        component={ToSView}
        options={{ title: 'Terms of Service' }}
      />
      <Stack.Screen
        name='HelpView'
        component={HelpView}
        options={{ title: 'Help' }}
      />
      <Stack.Screen
        name='BusinessView'
        component={BusinessView}
        options={{ title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  )
}

export const MapComponent = () => {
  const [distance, setDistance] = useState<Option>(DISTANCES[INITIAL_DISTANCE_INDEX])
  const { data } = useQuery<{ locations : LocationTypeWithRating[]}>(GET_COORDINATES)

  return (
    <React.Fragment>
      <MapView showRadius={true} radiusSize={distance.value as number} businesses={data}/>
      <DistanceRadiusSelector
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonText}
        onButtonPress={(selectedOption : Option) => setDistance(selectedOption)}
      />
    </React.Fragment>
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
  button: {
    marginLeft: width - 80,
    ...Platform.select({
      ios: {
        marginTop: 80,
      },
      android: {
        marginTop: 70,
      },
    }),
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
