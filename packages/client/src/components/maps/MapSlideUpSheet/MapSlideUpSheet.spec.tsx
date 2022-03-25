import { MockedProvider } from '@apollo/client/testing'
import MapSlideUpSheet from '@components/maps/MapSlideUpSheet'
import { fireEvent, render } from '@testing-library/react-native'
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
  const { getByA11yLabel } = render(<MapSlideUpSheet />)

  fireEvent.press(getByA11yLabel('SearchPanel'))
})

it('slides down when the handle is pressed and the sheet is in the top positon', () => {
  const { getByA11yLabel } = render(<MapSlideUpSheet />)

  fireEvent.press(getByA11yLabel('SearchPanel'))
})
