import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<CircularRatingIndicator circleWidth={20} circleHeight={20} progressBarWidth={5} progressValue={100} ratingName={'FutureProof'} />)
  expect(toJSON()).toMatchSnapshot()
})

it('renders rating title text appended with "Rating"', () => {
  const { getByTestId } = render(<CircularRatingIndicator circleWidth={20} circleHeight={20} progressBarWidth={5} progressValue={100} ratingName={'FutureProof'} />)
  const nameText = getByTestId('rating-name-text')
  expect(nameText).toHaveTextContent('FutureProof Rating')
})

it('renders rating value text with the rating value', () => {
  const { getByTestId } = render(<CircularRatingIndicator circleWidth={20} circleHeight={20} progressBarWidth={5} progressValue={100} ratingName={'FutureProof'} />)
  const valueText = getByTestId('rating-value-text')
  expect(valueText).toHaveTextContent('100')
})

it('throws an error when progressValue is less than 0', () => {
  expect(() => render(<CircularRatingIndicator circleWidth={20} circleHeight={20} progressBarWidth={5} progressValue={-1} ratingName={'FutureProof'} />)).toThrow()
})

it('throws an error when progressValue is greater than 100', () => {
  expect(() => render(<CircularRatingIndicator circleWidth={20} circleHeight={20} progressBarWidth={5} progressValue={101} ratingName={'FutureProof'} />)).toThrow()
})

it('renders a circular indicator with width matching the given parameter', () => {
  const { getByTestId } = render(<CircularRatingIndicator circleWidth={20} circleHeight={20} progressBarWidth={5} progressValue={100} ratingName={'FutureProof'} />)
  const indicator = getByTestId('circular-indicator')
  expect(indicator).toHaveStyle({ width: 20 })
})

it('renders a circular indicator with height matching the given parameter', () => {
  const { getByTestId } = render(<CircularRatingIndicator circleWidth={20} circleHeight={20} progressBarWidth={5} progressValue={100} ratingName={'FutureProof'} />)
  const indicator = getByTestId('circular-indicator')
  expect(indicator).toHaveStyle({ height: 20 })
})
