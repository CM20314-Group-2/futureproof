import DescriptionView from '@components/BusinessViews/DescriptionView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<DescriptionView profileText='TEST' />)
  expect(toJSON()).toMatchSnapshot()
})

it('renders expected text', () => {
  const { getByTestId } = render(<DescriptionView profileText={'TEST'}/>)
  
  const text = getByTestId('body-text')
  expect(text).toHaveTextContent('TEST')
})

it('gives a default message when no text is provided', () => {
  const { getByTestId } = render(<DescriptionView profileText={null} />)

  const text = getByTestId('body-text')
  expect(text).toHaveTextContent('No description available.')
})

it('gives a default message when text is undefined', () => {
  const { getByTestId } = render(<DescriptionView profileText={undefined} />)

  const text = getByTestId('body-text')
  expect(text).toHaveTextContent('No description available.')
})
