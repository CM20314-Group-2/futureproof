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
import { Business, Location } from '@futureproof/typings'
import Constants from 'expo-constants'

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

/**
 *
 * @returns
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
