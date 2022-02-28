import DescriptionView from '@components/DescriptionView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<DescriptionView profileText='TEST' />)
  expect(toJSON()).toMatchSnapshot()
})

it('gives a default message when no text is provided', () => {
  const { getByTestId } = render(<DescriptionView profileText={null} />)

  const text = getByTestId('body-text')
  expect(text.props.children).toEqual('No description available.')
})
