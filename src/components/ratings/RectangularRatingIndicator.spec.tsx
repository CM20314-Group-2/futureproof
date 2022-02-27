import RectangularRatingIndicator from '@components/ratings/RectangularRatingIndicator'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<RectangularRatingIndicator progressValue={100} ratingName={'MyRating'}/>)
  expect(toJSON()).toMatchSnapshot()
})

it('renders a rating name with given rating text', () => {
  const { getByTestId } = render(<RectangularRatingIndicator progressValue={100} ratingName={'MyRating'} />)
  
  const text = getByTestId('rating-title-text')
  expect(text).toHaveTextContent('MyRating')
})

it('throws an error when progressValue is less than 0', () => {
  expect(() => render(<RectangularRatingIndicator progressValue={-1} ratingName={'MyRating'} />)).toThrow()
})

it('throws an error when progressValue is greater than 100', () => {
  expect(() => render(<RectangularRatingIndicator progressValue={101} ratingName={'MyRating'} />)).toThrow()
})

/*
Don't currently know how to fetch SVG elements, replace below if found:

it('renders a green bar with text "Great" when ratingValue is greater than or equal to 85', () => {
  const { getByTestId } = render(<RectangularRatingIndicator progressValue={85} ratingName={'MyRating'} />)

  const capsule = getByTestId('rating-capsule')
  expect(capsule).toHaveStyle({ backgroundColor: '#1ea853' })
})

it('renders a green bar with text "Good" when ratingValue is between 70 and 84 inclusive', () => {
  const { getByTestId } = render(<RectangularRatingIndicator progressValue={70} ratingName={'MyRating'} />)

  const capsule = getByTestId('rating-capsule')
  expect(capsule).toHaveStyle({ backgroundColor: '#50a75c' })
})

it('renders a yellow bar with text "Okay" when ratingValue is between 50 and 69 inclusive', () => {
  const { getByTestId } = render(<RectangularRatingIndicator progressValue={50} ratingName={'MyRating'} />)

  const capsule = getByTestId('rating-capsule')
  expect(capsule).toHaveStyle({ backgroundColor: '#bed62e' })
})

it('renders an orange bar with text "Bad" when ratingValue is between 30 and 49 inclusive', () => {
  const { getByTestId } = render(<RectangularRatingIndicator progressValue={30} ratingName={'MyRating'} />)

  const capsule = getByTestId('rating-capsule')
  expect(capsule).toHaveStyle({ backgroundColor: '#d6c52e' })
})

it('renders a brown bar with text "Avoid" when ratingValue is below 30', () => {
  const { getByTestId } = render(<RectangularRatingIndicator progressValue={0} ratingName={'MyRating'} />)

  const capsule = getByTestId('rating-capsule')
  expect(capsule).toHaveStyle({ backgroundColor: 'brown' })
})*/
