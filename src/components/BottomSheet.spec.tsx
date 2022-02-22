import BottomSheet from '@components/BottomSheet'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { Text, ViewStyle } from 'react-native'

it('matches snapshot', () => {
  const { toJSON } = render(
    <BottomSheet height={100} show>
      <Text>TEST</Text>
    </BottomSheet>
  )
  expect(toJSON()).toMatchSnapshot()
})

it('is not rendered when show is false', () => {
  const sheetHeight = 100
  const { getByTestId } = render(
    <BottomSheet height={sheetHeight} show={false}>
      <Text>TEST</Text>
    </BottomSheet>
  )

  const bottomSheet = getByTestId('bottom-sheet')
  expect(bottomSheet).toHaveStyle({ bottom: -sheetHeight } as ViewStyle)
})

// TODO - what happens when the bottom sheet has a height greater than the screen?

it('is dismissed when the background is pressed', () => {
  const sheetHeight = 100
  const { getByTestId } = render(
    <BottomSheet height={sheetHeight} show>
      <Text>TEST</Text>
    </BottomSheet>
  )

  const bottomSheet = getByTestId('bottom-sheet')
  const background = getByTestId('bottom-sheet-background')

  fireEvent.press(background)
  expect(bottomSheet).toHaveStyle({ bottom: -sheetHeight } as ViewStyle)
})
