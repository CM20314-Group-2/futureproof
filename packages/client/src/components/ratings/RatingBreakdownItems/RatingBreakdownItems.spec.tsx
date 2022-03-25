import RatingBreakdownItems from '@components/ratings/RatingBreakdownItems'
import { Rating } from '@futureproof/typings'
import { render } from '@testing-library/react-native'
import React from 'react'

const EXAMPLE_RATINGS : Rating[] = [
  {
    id: '1234',
    ratingName: 'Carbon Dioxide',
    ratingValue: 78
  },
  {
    id: '5678',
    ratingName: 'Sea Pollution',
    ratingValue: 89
  },
  {
    id: '9012',
    ratingName: 'Deforestation',
    ratingValue: 65
  }
]

it('matches snapshot', () => {
  const { toJSON } = render(<RatingBreakdownItems ratings={EXAMPLE_RATINGS}/>)
  expect(toJSON()).toMatchSnapshot()
})
