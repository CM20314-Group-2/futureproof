import { RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { FeedScreen, RootStackParams } from '../App'

it('opens account page when account profile icon is clicked', async () => {
  const pushMock = jest.fn()
  const navigation = {
    push: pushMock
  }
  // This is terrible code and should be replaced ASAP.
  const { getByTestId } = render(<FeedScreen navigation={navigation as unknown as StackScreenProps<RootStackParams>['navigation']} route={undefined as unknown as RouteProp<RootStackParams, keyof RootStackParams>} />)

  fireEvent.press(getByTestId('AccountView'))

  expect(pushMock).toBeCalledWith('App')
})
