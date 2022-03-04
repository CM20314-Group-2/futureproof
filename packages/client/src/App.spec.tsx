import { FeedScreen } from '@src/App'
import { render, fireEvent } from '@testing-library/react-native'
import React from 'react'

it('opens account page when account profile icon is clicked', async () => {
  const pushMock = jest.fn()
  const { getByTestId } = render(<FeedScreen navigation={{ push: pushMock }} />)

  fireEvent.press(getByTestId('AccountView'))

  expect(pushMock).toBeCalledWith('App')
})
