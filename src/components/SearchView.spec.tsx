import SearchView from '@components/SearchView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<SearchView />)
  expect(toJSON()).toMatchSnapshot()
})
