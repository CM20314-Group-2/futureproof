import BusinessView from '@components/BusinessView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<BusinessView/>)
  expect(toJSON()).toMatchSnapshot()
})