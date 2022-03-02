/* eslint-disable react-native/no-inline-styles */
import { IN_DURATION, OUT_DURATION } from '@components/BottomSheet'
import SearchResultSorter, {
  OPTIONS_LIST,
} from '@components/SearchResultSorter'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import React from 'react'
import * as cache from '../cache'

declare global {
  function withAnimatedTimeTravelEnabled(fn: () => void): void
  function timeTravel(time: number): void
  function requestAnimationFrame(cb: FrameRequestCallback): void
}

it('matches snapshot', () => {
  const { toJSON } = render(<SearchResultSorter />)
  expect(toJSON()).toMatchSnapshot()
})

it('allows the button style to be set', () => {
  const { getByTestId } = render(
    <SearchResultSorter buttonStyle={{ backgroundColor: 'red' }} />
  )
  const button = getByTestId('result-sorter-button')
  expect(button).toHaveStyle({ backgroundColor: 'red' })
})

it('allows the button text style to be set', async () => {
  const { getByTestId } = render(
    <SearchResultSorter buttonTextStyle={{ color: 'red' }} />
  )
  const buttonText = getByTestId('result-sorter-button-text')
  expect(buttonText).toHaveStyle({ color: 'red' })
})

it('opens the result sorter view when the button is pressed', async () => {
  const { getByTestId } = render(<SearchResultSorter />)

  const button = getByTestId('result-sorter-button')
  fireEvent(button, 'press')

  const bottomSheet = getByTestId('bottom-sheet')
  await waitFor(() => expect(bottomSheet).toHaveStyle({ bottom: -400 }))
})

it('dismisses the result sorter when the outside of the bottom sheet is pressed', () => {
  global.withAnimatedTimeTravelEnabled(() => {
    const { getByTestId, queryByTestId } = render(<SearchResultSorter />)

    const button = getByTestId('result-sorter-button')
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

it('updates the selected option when an option is pressed', async () => {
  const { getByTestId, toJSON } = render(<SearchResultSorter />)
  const option = getByTestId(`sort-option-${OPTIONS_LIST[0].value}`)

  fireEvent(option, 'press')
  expect(toJSON()).toMatchSnapshot()
})

it('updates cached option value when apply is pressed', async () => {
  const sortOptionMock = jest.fn()
  jest.spyOn(cache, 'sortOption').mockImplementation(sortOptionMock)

  const { getByTestId } = render(<SearchResultSorter />)
  const option = getByTestId(`sort-option-${OPTIONS_LIST[0].value}`)

  fireEvent(option, 'press')
  const button = getByTestId('button')
  fireEvent(button, 'press')
  await waitFor(() =>
    expect(sortOptionMock).toHaveBeenCalledWith(OPTIONS_LIST[0].value)
  )
})
