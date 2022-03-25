/* eslint-disable react-native/no-inline-styles */
import { IN_DURATION, OUT_DURATION } from '@components/common/BottomSheet'
import DistanceRadiusSelector, { DISTANCES, INITIAL_DISTANCE_INDEX } from '@components/maps/DistanceRadiusSelector'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import React from 'react'

declare global {
  function withAnimatedTimeTravelEnabled(fn : () => void) : void
  function timeTravel(time : number) : void
  function requestAnimationFrame(cb : FrameRequestCallback) : void
}

it('matches snapshot', () => {
  const { toJSON } = render(<DistanceRadiusSelector onButtonPress={() => {return}}/>)
  expect(toJSON()).toMatchSnapshot()
})

it('allows the button style to be set', () => {
  const { getByTestId } = render(
    <DistanceRadiusSelector buttonStyle={{ backgroundColor: 'red' }} onButtonPress={() => {return}}/>
  )
  const button = getByTestId('option-selector-button')
  expect(button).toHaveStyle({ backgroundColor: 'red' })
})

it('allows the button text style to be set', async () => {
  const { getByTestId } = render(
    <DistanceRadiusSelector buttonTextStyle={{ color: 'red' }} onButtonPress={() => {return}}/>
  )
  const buttonText = getByTestId('option-selector-button-text')
  expect(buttonText).toHaveStyle({ color: 'red' })
})

it('opens the radius selector view when the button is pressed', async () => {
  const { getByTestId } = render(<DistanceRadiusSelector onButtonPress={() => {return}}/>)

  const button = getByTestId('option-selector-button')
  fireEvent(button, 'press')

  const bottomSheet = getByTestId('bottom-sheet')
  await waitFor(() => expect(bottomSheet).toHaveStyle({ bottom: -400 }))
})

it('dismisses the radius selector when the outside of the bottom sheet is pressed', () => {
  global.withAnimatedTimeTravelEnabled(() => {
    const { getByTestId, queryByTestId } = render(<DistanceRadiusSelector onButtonPress={() => {return}}/>)

    const button = getByTestId('option-selector-button')
    fireEvent(button, 'press')
    timeTravel(IN_DURATION)

    const bottomSheet = getByTestId('bottom-sheet')
    expect(bottomSheet).toHaveStyle({ bottom: 0 })

    const bottomSheetBackground = getByTestId('bottom-sheet-background')
    fireEvent.press(bottomSheetBackground)
    timeTravel(OUT_DURATION)

    expect(queryByTestId('bottom-sheet-background')).toBeNull()
    expect(bottomSheet).toHaveStyle({ bottom: -400 })
  })
})

it('updates the selected distance when an option is pressed', async () => {
  const { getByTestId, toJSON } = render(<DistanceRadiusSelector onButtonPress={() => {return}}/>)
  const option = getByTestId(`option-list-${DISTANCES[INITIAL_DISTANCE_INDEX].value}`)

  fireEvent(option, 'press')
  expect(toJSON()).toMatchSnapshot()
})

it('onButtonPress is called', async () => {
  const mockOnPress = jest.fn()
  const { getByTestId } = render(<DistanceRadiusSelector onButtonPress={mockOnPress}/>)

  const button = getByTestId('button')
  fireEvent.press(button)
  await waitFor(() => {
    expect(mockOnPress).toHaveBeenCalled()
  })
})
