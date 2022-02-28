import OptionList, { Option } from '@components/OptionList'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'


const INITIAL_OPTION_INDEX = 1
const OPTIONS : Option[] = [
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 }
]

it('matches snapshot', () => {
  const { toJSON } = render(<OptionList onChange={() => {return}} initial={INITIAL_OPTION_INDEX} options={OPTIONS}/>)
  expect(toJSON()).toMatchSnapshot()
})

it('fires on change when new option is selected', () => {
  const onChange = jest.fn()
  const { getByTestId } = render(<OptionList onChange={onChange} initial={INITIAL_OPTION_INDEX} options={OPTIONS}/>)

  const option = getByTestId(`option-list-${OPTIONS[INITIAL_OPTION_INDEX].value}`)
  fireEvent(option, 'press')

  expect(onChange).toHaveBeenCalled()
})

it('defaults to 0th index option if initial is out of range', () => {
  const { getByTestId } = render(<OptionList onChange={() => {return}} initial={-1} options={OPTIONS}/>)

  const firstOption = getByTestId(`option-list-${OPTIONS[0].value}`)
  const secondOption = getByTestId(`option-list-${OPTIONS[1].value}`)
  expect(firstOption).toHaveStyle({
    backgroundColor: '#1ea853',
  })
  expect(secondOption).toHaveStyle({
    backgroundColor: '#ffffff',
  })
})

// TODO workout how to test styles during press
