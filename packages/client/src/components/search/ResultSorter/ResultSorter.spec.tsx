/* eslint-disable react-native/no-inline-styles */
import ResultSorter, { INITIAL_OPTION_INDEX, OPTIONS_LIST } from '@components/search/ResultSorter'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import React from 'react'
import * as cache from '../../../cache'

it('matches snapshot', () => {
  const { toJSON } = render(<ResultSorter />)
  expect(toJSON()).toMatchSnapshot()
})

it('allows the button style to be set', () => {
  const { getByTestId } = render(
    <ResultSorter buttonStyle={{ backgroundColor: 'red' }} />
  )
  const button = getByTestId('option-selector-button')
  expect(button).toHaveStyle({ backgroundColor: 'red' })
})

it('allows the button text style to be set', async () => {
  const { getByTestId } = render(
    <ResultSorter buttonTextStyle={{ color: 'red' }} />
  )
  const buttonText = getByTestId('option-selector-button-text')
  expect(buttonText).toHaveStyle({ color: 'red' })
})

it('opens the result sorter view when the button is pressed', async () => {
  const { getByTestId } = render(<ResultSorter />)

  const button = getByTestId('option-selector-button')
  fireEvent(button, 'press')

  const bottomSheet = getByTestId('bottom-sheet')
  await waitFor(() => expect(bottomSheet).toHaveStyle({ bottom: -400 }))
})

it('updates the selected option when an option is pressed', async () => {
  const { getByTestId, toJSON } = render(<ResultSorter />)
  const option = getByTestId(`option-list-${OPTIONS_LIST[INITIAL_OPTION_INDEX].value}`)

  fireEvent(option, 'press')
  expect(toJSON()).toMatchSnapshot()
})

it('updates cached option value when apply is pressed', async () => {
  const sortOptionMock = jest.fn()
  jest.spyOn(cache, 'sortOption').mockImplementation(sortOptionMock)

  const { getByTestId } = render(<ResultSorter />)
  const option = getByTestId(`option-list-${OPTIONS_LIST[INITIAL_OPTION_INDEX].value}`)

  fireEvent(option, 'press')
  const button = getByTestId('button')
  fireEvent(button, 'press')
  await waitFor(() =>
    expect(sortOptionMock).toHaveBeenCalledWith(OPTIONS_LIST[INITIAL_OPTION_INDEX].value)
  )
})
