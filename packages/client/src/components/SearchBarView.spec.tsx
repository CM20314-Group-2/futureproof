import { MockedProvider } from '@apollo/client/testing'
import SearchBarView from '@components/SearchBarView'
import { render } from '@testing-library/react-native'
import React from 'react'

// TODO - Complete tests when the search bar is properly connected

it('matches snapshot', () => {
  const { toJSON } = render(
    <MockedProvider>
      <SearchBarView />
    </MockedProvider>
  )
  expect(toJSON()).toMatchSnapshot()
})
