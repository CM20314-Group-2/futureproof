import { Option } from '@components/SearchResultSorter'
import SortOptions from '@components/SortOptions'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'

const options: Option[] = [
  { label: 'Distance Ascending', value: 'distance_asc' },
  { label: 'Distance Descending', value: 'distance_desc' },
]

it('matches snapshot', () => {
  const { toJSON } = render(
    <SortOptions
      onChange={() => {
        return
      }}
      initial={1}
      options={options}
    />
  )
  expect(toJSON()).toMatchSnapshot()
})

it('fires on change when new option is selected', () => {
  const onChange = jest.fn()
  const { getByTestId } = render(
    <SortOptions onChange={onChange} initial={1} options={options} />
  )

  const option = getByTestId('sort-option-distance_desc')
  fireEvent(option, 'press')

  expect(onChange).toHaveBeenCalled()
})

it('does not specify a selected option if initial is out of range', () => {
  const { getByTestId } = render(
    <SortOptions
      onChange={() => {
        return
      }}
      initial={-1}
      options={options}
    />
  )

  const firstOption = getByTestId(`sort-option-${options[0].value}`)
  const secondOption = getByTestId(`sort-option-${options[1].value}`)
  expect(firstOption).toHaveStyle({
    backgroundColor: '#ffffff',
  })
  expect(secondOption).toHaveStyle({
    backgroundColor: '#ffffff',
  })
})

it('does not specify a selected option if initial is undefined', () => {
  const { getByTestId } = render(
    <SortOptions
      onChange={() => {
        return
      }}
      options={options}
    />
  )

  const firstOption = getByTestId(`sort-option-${options[0].value}`)
  const secondOption = getByTestId(`sort-option-${options[1].value}`)
  expect(firstOption).toHaveStyle({
    backgroundColor: '#ffffff',
  })
  expect(secondOption).toHaveStyle({
    backgroundColor: '#ffffff',
  })
})

it('does not specify a selected option if initial is null', () => {
  const { getByTestId } = render(
    <SortOptions
      onChange={() => {
        return
      }}
      initial={null}
      options={options}
    />
  )

  const firstOption = getByTestId(`sort-option-${options[0].value}`)
  const secondOption = getByTestId(`sort-option-${options[1].value}`)
  expect(firstOption).toHaveStyle({
    backgroundColor: '#ffffff',
  })
  expect(secondOption).toHaveStyle({
    backgroundColor: '#ffffff',
  })
})

// TODO workout how to test styles during press
