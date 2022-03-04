import MapSlideUpSheet from '@components/MapSlideUpSheet'
import { render, fireEvent } from '@testing-library/react-native'
import { MockedProvider } from '@apollo/client/testing'
import React from 'react'

it('renders default elements', () => {
  const { getByPlaceholderText } = render(
    <MockedProvider>
      <MapSlideUpSheet />
    </MockedProvider>
  )

  expect(getByPlaceholderText('Search'))
})

it('slides up when the handle is pressed and the sheet is in the bottom positon', () => {
  const { getByRole } = render(<MapSlideUpSheet />)

  fireEvent.press(getByRole('SearchPanel'))
})

it('slides down when the handle is pressed and the sheet is in the top positon', () => {
  const { getByRole } = render(<MapSlideUpSheet />)

  fireEvent.press(getByRole('SearchPanel'))
})
