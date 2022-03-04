import SearchItemStats from '@components/search/SearchItemStats'
import { render } from '@testing-library/react-native'
import React from 'react'

const business: Parameters<typeof SearchItemStats>[0] = {
  name: 'Starbucks',
  customerScore: 70,
  sustainabilityScore: 50,
}

it('matches snapshot', () => {
  const { toJSON } = render(<SearchItemStats {...business} />)
  expect(toJSON()).toMatchSnapshot()
})
