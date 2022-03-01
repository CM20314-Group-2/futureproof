import RatingView from '@components/RatingView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<RatingView ratingName='FutureProof' ratingValue={70}/>)
  expect(toJSON()).toMatchSnapshot()
})
