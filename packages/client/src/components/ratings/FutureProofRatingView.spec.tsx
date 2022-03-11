import FutureProofRatingView from '@components/ratings/FutureProofRatingView'
import { render } from '@testing-library/react-native'
import React from 'react'
import { DisplayableBusiness, BusinessType } from '@futureproof/typings'

const ExampleBusiness : DisplayableBusiness =  {
  id: '1',
  name: 'Starbucks',
  profileText: 'This is a test business and there is not that much to say about it.',
  sustainabilityScore: 80,
  sustainabilityCertificates: [
    {
      id: '1234',
      certificateName: 'BCorp',
      businessHasCertificate: 1
    },
    {
      id: '5678',
      certificateName: 'GreenMark',
      businessHasCertificate: 0
    }
  ],
  sustainabilityRatings: [
    {
      id: '1234',
      ratingName: 'Carbon Dioxide',
      ratingValue: 78
    },
    {
      id: '5678',
      ratingName: 'Deforestation',
      ratingValue: 86
    }
  ],
  customerScore: 65,
  type: BusinessType.Cafe,
  profilePicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
}

it('matches snapshot', () => {
  const { toJSON } = render(
    <FutureProofRatingView 
      sustainabilityScore={ExampleBusiness.sustainabilityScore} 
      sustainabilityCertificates={ExampleBusiness.sustainabilityCertificates} 
      sustainabilityRatings={ExampleBusiness.sustainabilityRatings}
    />
  )
  expect(toJSON()).toMatchSnapshot()
})

it('renders rating title text appended with "Rating"', () => {
  const { getByTestId } = render(
    <FutureProofRatingView 
      sustainabilityScore={ExampleBusiness.sustainabilityScore} 
      sustainabilityCertificates={ExampleBusiness.sustainabilityCertificates} 
      sustainabilityRatings={ExampleBusiness.sustainabilityRatings}
    />
  )
  const nameText = getByTestId('rating-name-text')
  expect(nameText).toHaveTextContent('FutureProof Rating')
})
