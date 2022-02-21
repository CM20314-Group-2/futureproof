import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// Import Navigation Libraries
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// Import Screens
import MapView from '@components/MapView'
import SearchView from '@components/SearchView'
import MapSlideUpSheet from '@components/MapSlideUpSheet'
import BusinessView from '@components/BusinessViews/BusinessView'
import AccountView from '@components/AccountView'

import AccountButton from './components/AccountButton';
import React from 'react'
import { StyleSheet, View, SafeAreaView,  TouchableOpacity} from 'react-native'


// Initialise Apollo Client
const client = new ApolloClient({
  uri: 'http//localhost:3000', // Server URL (must be absolute)
  cache: new InMemoryCache() // Cache
})

// Initialise Stack Navigator
const Stack = createStackNavigator();

export const FeedScreen = ({ navigation } : {navigation:  any}) => {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <MapView/>
          <SafeAreaView>
            <TouchableOpacity onPress = {() => navigation.push("AccountView")}>
              <AccountButton/>
            </TouchableOpacity>
          </SafeAreaView>
          <MapSlideUpSheet parentData={navigation}/>
        </View>
      </ApolloProvider>
    )
}

export const AppNavigator = () => {
  
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="MapView"
        component={FeedScreen}
        options={{title: "Map", headerShown: false}}/>
      <Stack.Screen
        name="AccountView"
        component={AccountView}
        options={{title: "Account Settings"}}/>
    </Stack.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
  
})

export default App
