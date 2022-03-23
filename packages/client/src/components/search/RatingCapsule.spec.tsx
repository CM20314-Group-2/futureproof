import RatingCapsule, {
  ratingToColour,
  ratingToText,
} from '@components/search/RatingCapsule'
import { render } from '@testing-library/react-native'
import React from 'react'

describe('ratingToColour', () => {
  it('returns #1ea853 for ratings greater than or equal to 85', () => {
    expect(ratingToColour(85)).toBe('#1ea853')
    expect(ratingToColour(100)).toBe('#1ea853')
  })

  it('returns #50a75c for ratings between 70 and 84 inclusive', () => {
    expect(ratingToColour(70)).toBe('#50a75c')
    expect(ratingToColour(84)).toBe('#50a75c')
  })

  it('returns #bed62e for ratings between 50 and 69 inclusive', () => {
    expect(ratingToColour(55)).toBe('#bed62e')
    expect(ratingToColour(69)).toBe('#bed62e')
  })

  it('returns #d6c52e for ratings between 30 and 49 inclusive', () => {
    expect(ratingToColour(30)).toBe('#d6c52e')
    expect(ratingToColour(49)).toBe('#d6c52e')
  })

  it('returns brown for ratings below 30', () => {
    expect(ratingToColour(0)).toBe('brown')
    expect(ratingToColour(29)).toBe('brown')
  })

  it('throws an error when ratingValue is less than 0', () => {
    expect(() => ratingToColour(-1)).toThrow()
  })

  it('throws an error when ratingValue is greater than 100', () => {
    expect(() => ratingToColour(101)).toThrow()
  })
})

describe('ratingToText', () => {
  it('returns "Great" for ratings greater than or equal to 85', () => {
    expect(ratingToText(85)).toBe('Great')
    expect(ratingToText(100)).toBe('Great')
  })

  it('returns "Good" for ratings between 70 and 84 inclusive', () => {
    expect(ratingToText(70)).toBe('Good')
    expect(ratingToText(84)).toBe('Good')
  })

  it('returns "Okay" for ratings between 50 and 69 inclusive', () => {
    expect(ratingToText(55)).toBe('Okay')
    expect(ratingToText(69)).toBe('Okay')
  })

  it('returns "Bad" for ratings between 30 and 49 inclusive', () => {
    expect(ratingToText(30)).toBe('Bad')
    expect(ratingToText(49)).toBe('Bad')
  })

  it('returns "Avoid" for ratings below 30', () => {
    expect(ratingToText(0)).toBe('Avoid')
    expect(ratingToText(29)).toBe('Avoid')
  })

  it('throws an error when ratingValue is less than 0', () => {
    expect(() => ratingToText(-1)).toThrow()
  })

  it('throws an error when ratingValue is greater than 100', () => {
    expect(() => ratingToText(101)).toThrow()
  })
})

describe('RatingCapsule', () => {
  it('renders a green capsule with text "Great" when ratingValue is greater than or equal to 85', () => {
    const { getByTestId } = render(<RatingCapsule ratingValue={85} />)

    const capsule = getByTestId('rating-capsule')
    const text = getByTestId('rating-text')
    expect(capsule).toHaveStyle({ backgroundColor: '#1ea853' })
    expect(text).toHaveTextContent('Great')
  })

  it('renders a green capsule with text "Good" when ratingValue is between 70 and 84 inclusive', () => {
    const { getByTestId } = render(<RatingCapsule ratingValue={70} />)

    const capsule = getByTestId('rating-capsule')
    const text = getByTestId('rating-text')
    expect(capsule).toHaveStyle({ backgroundColor: '#50a75c' })
    expect(text).toHaveTextContent('Good')
  })

  it('renders a yellow capsule with text "Okay" when ratingValue is between 50 and 69 inclusive', () => {
    const { getByTestId } = render(<RatingCapsule ratingValue={55} />)

    const capsule = getByTestId('rating-capsule')
    const text = getByTestId('rating-text')
    expect(capsule).toHaveStyle({ backgroundColor: '#bed62e' })
    expect(text).toHaveTextContent('Okay')
  })

  it('renders an orange capsule with text "Bad" when ratingValue is between 30 and 49 inclusive', () => {
    const { getByTestId } = render(<RatingCapsule ratingValue={30} />)

    const capsule = getByTestId('rating-capsule')
    const text = getByTestId('rating-text')
    expect(capsule).toHaveStyle({ backgroundColor: '#d6c52e' })
    expect(text).toHaveTextContent('Bad')
  })

  it('renders a brown capsule with text "Avoid" when ratingValue is below 30', () => {
    const { getByTestId } = render(<RatingCapsule ratingValue={0} />)

    const capsule = getByTestId('rating-capsule')
    const text = getByTestId('rating-text')
    expect(capsule).toHaveStyle({ backgroundColor: 'brown' })
    expect(text).toHaveTextContent('Avoid')
  })

  it('throws an error when ratingValue is less than 0', () => {
    expect(() => render(<RatingCapsule ratingValue={-1} />)).toThrow()
  })

  it('throws an error when ratingValue is greater than 100', () => {
    expect(() => render(<RatingCapsule ratingValue={101} />)).toThrow()
  })

  it('defaults to a brown capsule with text "Avoid" if the rating value is null', () => {
    const { getByTestId } = render(<RatingCapsule ratingValue={null} />)

    const capsule = getByTestId('rating-capsule')
    const text = getByTestId('rating-text')
    expect(capsule).toHaveStyle({ backgroundColor: 'brown' })
    expect(text).toHaveTextContent('Avoid')
  })

  it('defaults to a brown capsule with text "Avoid" if the rating value is undefined', () => {
    const { getByTestId } = render(<RatingCapsule ratingValue={undefined} />)

    const capsule = getByTestId('rating-capsule')
    const text = getByTestId('rating-text')
    expect(capsule).toHaveStyle({ backgroundColor: 'brown' })
    expect(text).toHaveTextContent('Avoid')
  })
})
