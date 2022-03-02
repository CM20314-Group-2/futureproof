/* eslint-disable react-native/no-inline-styles */
import Button from '@components/Button'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'

it('matches snapshot', () => {
  const { toJSON } = render(
    <Button
      onPress={() => {
        return
      }}
      text={'TEST'}
    />
  )
  expect(toJSON()).toMatchSnapshot()
})

it('fires onPress function when pressed', async () => {
  // TODO - Test this component's style changes during press
  const mockOnPress = jest.fn()
  const { getByTestId } = render(<Button text='asd' onPress={mockOnPress} />)

  const button = getByTestId('button')
  fireEvent.press(button)
  await waitFor(() => {
    expect(mockOnPress).toHaveBeenCalled()
  })
})

it('accepts custom styles', () => {
  const { getByTestId } = render(
    <Button
      text='asd'
      onPress={() => {
        return
      }}
      style={{ backgroundColor: 'red' }}
    />
  )

  const button = getByTestId('button')
  expect(button).toHaveStyle({ backgroundColor: 'red' } as ViewStyle)
})

it('accepts custom text styles', () => {
  const { getByTestId } = render(
    <Button
      text='asd'
      onPress={() => {
        return
      }}
      textStyle={{ color: 'red' }}
    />
  )

  const text = getByTestId('button-text')
  expect(text).toHaveStyle({ color: 'red' } as TextStyle)
})
