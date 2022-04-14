import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from '@apollo/client'
import AccountView from '@components/account/AccountView'
import HelpView from '@components/account/HelpView'
import PasswordView from '@components/account/PasswordView'
import PPView from '@components/account/PPView'
import ToSView from '@components/account/ToSView'
import BusinessView, { ComponentProps as BusinessViewProps } from '@components/business/BusinessView'
import FutureProofRatingView from '@components/ratings/FutureProofRatingView'
import { Option } from '@components/common/OptionList'
import DistanceRadiusSelector, { DISTANCES, INITIAL_DISTANCE_INDEX } from '@components/maps/DistanceRadiusSelector'
import MapSlideUpSheet from '@components/maps/MapSlideUpSheet'
import MapView from '@components/maps/MapView'
import { DisplayableBusiness, Location } from '@futureproof/typings'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import Constants from 'expo-constants'
import React, { useState } from 'react'
import {
  Dimensions,
  Platform, SafeAreaView,
  StyleSheet, TouchableOpacity, View
} from 'react-native'
import AccountButton from './src/components/account/AccountButton/AccountButton'

const GET_COORDINATES = gql `
  query {
    locations {
      id
      latitude
      longitude
      business {
        sustainabilityScore
        id
        name
        customerScore
        type
        profileText
        profilePicture
        images
        humanRightsScore
        carbonScore
        certificateScore
        envProtectionScore
        diversityScore
        productSafetyScore
        equalPayScore
        taxScore
        dataPrivacyScore
        charitableScore
      }
    }
  }`

export type LocationType = Pick<Location, 'latitude' | 'longitude' | 'id'>;

export interface LocationTypeWithRating extends LocationType {
  business : DisplayableBusiness
}

// Initialise Apollo Client
const client = new ApolloClient({
  uri: `${Constants.manifest?.extra?.serverAddress}/graphql`, // Server URL (must be absolute)
  cache: new InMemoryCache(), // Cache
})

export type RootStackParamList = {
  MapView : Parameters<typeof MapView>[0]
  AccountView : undefined
  PasswordView : Parameters<typeof PasswordView>
  PPView : Parameters<typeof PPView>
  ToSView : Parameters<typeof ToSView>
  HelpView : Parameters<typeof HelpView>
  BusinessView : BusinessViewProps
  FutureProofRatingView : BusinessViewProps
}

// Initialise Stack Navigator
const Stack = createStackNavigator<RootStackParamList>()
export type NavigationProps = StackScreenProps<RootStackParamList>

export const FeedScreen = ({ navigation, route } : NavigationProps) => {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <MapComponent navigation={navigation} route={route} />
        <SafeAreaView>
          <TouchableOpacity
            onPress={() => navigation.push('AccountView')}
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
      <Stack.Screen
        name='FutureProofRatingView'
        component={FutureProofRatingView}
        options={{ title: 'Futureproof Ratings' }}
      />
    </Stack.Navigator>
  )
}

export const MapComponent = ({ navigation, route } : NavigationProps) => {
  const [distance, setDistance] = useState<Option>(DISTANCES[INITIAL_DISTANCE_INDEX])
  const { data } = useQuery<{ locations : LocationTypeWithRating[]}>(GET_COORDINATES)

  return (
    <React.Fragment>
      <MapView
        showRadius={true}
        radiusSize={Number(distance.value)}
        locations={data?.locations}
        navigation={navigation}
        route={route}
      />
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
    ...Platform.select({
      ios: {
        marginTop: 90,
      },
      android: {
        marginTop: 70,
      },
    }),
    backgroundColor: '#1ea853',
    borderColor: '#188441',
    borderRadius: 25,
    borderWidth: 2,
    height: 25,
    left: 20,
    top: -Dimensions.get('screen').height + 180,
    width: 60
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
