import RatingView from '@components/RatingView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<RatingView ratingName='FutureProof' ratingValue={70}/>)
  expect(toJSON()).toMatchSnapshot()
})

it('sets the ratingValue to 0 if it is null', () => {
  const { getByTestId } = render(<RatingView ratingName='FutureProof' ratingValue={null}/>)
  const text = getByTestId('rating-value')
  expect(text).toHaveTextContent('0')
})

it('sets the ratingValue to 0 if it is undefined', () => {
  const { getByTestId } = render(<RatingView ratingName='FutureProof' ratingValue={undefined}/>)
  const text = getByTestId('rating-value')
  expect(text).toHaveTextContent('0')
})