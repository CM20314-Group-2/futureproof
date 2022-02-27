import FutureProofRatingView from '@components/ratings/FutureProofRatingView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<FutureProofRatingView/>)
  expect(toJSON()).toMatchSnapshot()
})
