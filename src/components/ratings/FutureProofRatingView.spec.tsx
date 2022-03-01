import FutureProofRatingView from '@components/ratings/FutureProofRatingView'
import { render } from '@testing-library/react-native'
import React from 'react'
import { DisplayableBusiness, BusinessType } from '@futureproof/typings'

const ExampleBusiness : DisplayableBusiness =  {
  id: '1',
  name: 'Starbucks',
  profileText: 'This is a test business and there is not that much to say about it.',
  sustainabilityScore: 80,
  customerScore: 65,
  type: BusinessType.Cafe,
  profilePicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
}

it('matches snapshot', () => {
  const { toJSON } = render(<FutureProofRatingView businessToDisplay={ExampleBusiness}/>)
  expect(toJSON()).toMatchSnapshot()
})

it('renders rating title text appended with "Rating"', () => {
  const { getByTestId } = render(<FutureProofRatingView businessToDisplay={ExampleBusiness} />)
  const nameText = getByTestId('rating-name-text')
  expect(nameText).toHaveTextContent('FutureProof Rating')
})
