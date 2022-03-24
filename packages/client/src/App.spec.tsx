import { render, fireEvent } from '@testing-library/react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './App'

it('matches snapshot', () => {

  const component = (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )

  const { toJSON } = render(component)

  expect(toJSON()).toMatchSnapshot()
})

it('opens account page when account profile icon is clicked', async () => {
  
  const component = (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )

  const { getByTestId, findByText } = render(component)

  fireEvent.press(getByTestId('AccountView'))
  const newHeader = await findByText('Account Settings')
  const newBody = await findByText('Name')

  expect(newHeader).toBeTruthy()
  expect(newBody).toBeTruthy()
})
