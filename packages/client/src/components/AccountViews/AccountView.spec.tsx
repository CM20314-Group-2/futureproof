import AccountView from '@components/AccountViews/AccountView'
import { render, fireEvent } from '@testing-library/react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HelpView from '@components/AccountViews/HelpView'
import PasswordView from '@components/AccountViews/PasswordView'
import PPView from '@components/AccountViews/PPView'
import ToSView from '@components/AccountViews/ToSView'

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

  const { getByTestId, findByText } = render(component)
  
  fireEvent.press(getByTestId('PasswordView'))
  
  const newHeader = await findByText('Account Settings')
  const newBody = await findByText('Name')

  expect(newHeader).toBeTruthy()
  expect(newBody).toBeTruthy()
})

it('opens PP page when account profile icon is clicked', async () => {
  const component = (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  )

  const { getByTestId, findByText } = render(component)

  fireEvent.press(getByTestId('PPView'))

  const newHeader = await findByText('Account Settings')
  const newBody = await findByText('Name')

  expect(newHeader).toBeTruthy()
  expect(newBody).toBeTruthy()
})

it('opens ToS page when account profile icon is clicked', async () => {
  const component = (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  )

  const { getByTestId, findByText } = render(component)
  
  fireEvent.press(getByTestId('ToSView'))
  
  const newHeader = await findByText('Account Settings')
  const newBody = await findByText('Name')

  expect(newHeader).toBeTruthy()
  expect(newBody).toBeTruthy()
})

it('opens help page when account profile icon is clicked', async () => {
  const component = (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  )

  const { getByTestId, findByText } = render(component)

  fireEvent.press(getByTestId('HelpView'))

  const newHeader = await findByText('Account Settings')
  const newBody = await findByText('Name')

  expect(newHeader).toBeTruthy()
  expect(newBody).toBeTruthy()
})
