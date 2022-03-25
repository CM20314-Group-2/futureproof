import IndividualImage from '@components/IndividualImage'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<IndividualImage {}/>)
  expect(toJSON()).toMatchSnapshot()
})
