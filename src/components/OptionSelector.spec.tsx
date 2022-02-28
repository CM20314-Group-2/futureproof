/* eslint-disable react-native/no-inline-styles */
import { IN_DURATION, OUT_DURATION } from '@components/BottomSheet'
import OptionSelector from '@components/OptionSelector'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { Option } from '@components/OptionList'


const INITIAL_OPTION_INDEX = 1
const OPTIONS : Option[] = [
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 },
  { label: 'option 3', value: 3 },
  { label: 'option 4', value: 4 }
]

declare global {
  function withAnimatedTimeTravelEnabled(fn : () => void) : void
  function timeTravel(time : number) : void
  function requestAnimationFrame(cb : FrameRequestCallback) : void
}

it('matches snapshot', () => {
  const { toJSON } = render(
    <OptionSelector
      options={OPTIONS}
      initial={INITIAL_OPTION_INDEX}
      selectorTitle={'Test Selector'}
      onButtonPress={() => {return}}
    />
  )
  expect(toJSON()).toMatchSnapshot()
})

it('allows the button style to be set', () => {
  const { getByTestId } = render(
    <OptionSelector
      options={OPTIONS}
      initial={INITIAL_OPTION_INDEX}
      selectorTitle={'Test Selector'}
      buttonStyle={{ backgroundColor: 'red' }}
      onButtonPress={() => {return}}
    />
  )
  const button = getByTestId('option-selector-button')
  expect(button).toHaveStyle({ backgroundColor: 'red' })
})

it('allows the button text style to be set', async () => {
  const { getByTestId } = render(
    <OptionSelector
      options={OPTIONS}
      initial={INITIAL_OPTION_INDEX}
      selectorTitle={'Test Selector'}
      buttonTextStyle={{ color: 'red' }}
      onButtonPress={() => {return}}
    />
  )
  const buttonText = getByTestId('option-selector-button-text')
  expect(buttonText).toHaveStyle({ color: 'red' })
})

it('opens the option selector view when the button is pressed', async () => {
  const { getByTestId } = render(
    <OptionSelector
      options={OPTIONS}
      initial={INITIAL_OPTION_INDEX}
      selectorTitle={'Test Selector'}
      buttonStyle={{ backgroundColor: 'red' }}
      onButtonPress={() => {return}}
    />
  )

  const button = getByTestId('option-selector-button')
  fireEvent(button, 'press')

  const bottomSheet = getByTestId('bottom-sheet')
  await waitFor(() => expect(bottomSheet).toHaveStyle({ bottom: -400 }))
})

it('dismisses the result sorter when the outside of the bottom sheet is pressed', () => {
  global.withAnimatedTimeTravelEnabled(() => {
    const { getByTestId, queryByTestId } = render(
      <OptionSelector
        options={OPTIONS}
        initial={INITIAL_OPTION_INDEX}
        selectorTitle={'Test Selector'}
        buttonStyle={{ backgroundColor: 'red' }}
        onButtonPress={() => {return}}
      />
    )

    const button = getByTestId('option-selector-button')
    fireEvent(button, 'press')
    timeTravel(IN_DURATION)

    const bottomSheet = getByTestId('bottom-sheet')
    expect(bottomSheet).toHaveStyle({ bottom: 0 })

    const bottomSheetBackground = getByTestId('bottom-sheet-background')
    fireEvent.press(bottomSheetBackground)
    timeTravel(OUT_DURATION)

    expect(queryByTestId('bottom-sheet-background')).toBeNull()
    expect(bottomSheet).toHaveStyle({ bottom: -400 })})
})

it('updates the selected option when an option is pressed', async () => {
  const { getByTestId, toJSON } = render(
    <OptionSelector
      options={OPTIONS}
      initial={INITIAL_OPTION_INDEX}
      selectorTitle={'Test Selector'}
      buttonStyle={{ backgroundColor: 'red' }}
      onButtonPress={() => {return}}
    />
  )
  const option = getByTestId(`option-list-${OPTIONS[0].value}`)

  fireEvent(option, 'press')
  expect(toJSON()).toMatchSnapshot()
})
