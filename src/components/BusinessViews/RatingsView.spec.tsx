import RatingsView from '@components/RatingsView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(
    <RatingsView customerScore={50} sustainabilityScore={70} />
  )
  expect(toJSON()).toMatchSnapshot()
})
