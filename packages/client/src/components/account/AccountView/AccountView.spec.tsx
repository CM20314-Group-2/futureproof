import AccountView from '@components/account/AccountView/AccountView'
import { render, fireEvent } from '@testing-library/react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HelpView from '@components/account/AccountSubViews/HelpView'
import PasswordView from '@components/account/AccountSubViews/PasswordView'
import PPView from '@components/account/AccountSubViews/PPView'
import ToSView from '@components/account/AccountSubViews/ToSView'

type RootStackParamList = {
    AccountView : undefined
    PasswordView : undefined
    PPView : undefined
    ToSView : undefined
    HelpView : undefined
  }
  
// Initialise Stack Navigator
const Stack = createStackNavigator<RootStackParamList>()
  
//type Props = StackScreenProps<RootStackParamList>

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  )
}

it('renders default elements', () => {
  const component = (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  )

  const { getByPlaceholderText } = render(component)

  getByPlaceholderText('John Smith')
  getByPlaceholderText('john.smith@gmail.com')
})

it('opens password page when account profile icon is clicked', async () => {
  const component = (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  )

  const { getByText, findByText } = render(component)
  
  fireEvent.press(getByText('Change Password                                          >'))
  
  const newHeader = await findByText('Change Password')

  expect(newHeader).toBeTruthy()
})

it('opens PP page when account profile icon is clicked', async () => {
  const component = (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  )

  const { getByText, findByText } = render(component)
  
  fireEvent.press(getByText('Privacy Policy                                                 >'))

  const newHeader = await findByText('Privacy Policy')

  expect(newHeader).toBeTruthy()
})

it('opens ToS page when account profile icon is clicked', async () => {
  const component = (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  )

  const { getByText, findByText } = render(component)
  
  fireEvent.press(getByText('Terms of Service                                            >'))
  
  const newHeader = await findByText('Terms of Service')

  expect(newHeader).toBeTruthy()
})

it('opens help page when account profile icon is clicked', async () => {
  const component = (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  )

  const { getByText, findByText } = render(component)
  
  fireEvent.press(getByText('Help                                                                  >'))

  const newHeader = await findByText('Help')

  expect(newHeader).toBeTruthy()
})
