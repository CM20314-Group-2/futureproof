import BusinessView from '@components/BusinessView'
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
  const { toJSON } = render(<BusinessView businessToDisplay={ExampleBusiness}/>)
  expect(toJSON()).toMatchSnapshot()
})
