import SearchResult from '@components/search/SearchResult'
import { BusinessType, DisplayableBusiness } from '@futureproof/typings'
import { render } from '@testing-library/react-native'
import React from 'react'

const business: DisplayableBusiness = {
  id: '1',
  name: 'Test Business',
  type: BusinessType.Cafe,
  customerScore: 50,
  sustainabilityScore: 70,
}

it('matches snapshot', () => {
  const { toJSON } = render(
    <SearchResult
      onPress={() => {
        return
      }}
      business={business}
    />
  )
  expect(toJSON()).toMatchSnapshot()
})

it('renders profile picture if one is provided', () => {
  const profilePicture =
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  const { getByTestId } = render(
    <SearchResult
      onPress={() => {
        return
      }}
      business={{ ...business, profilePicture }}
    />
  )

  const logo = getByTestId('business-logo')
  expect(logo.props.source).toHaveProperty('uri', profilePicture)
})
