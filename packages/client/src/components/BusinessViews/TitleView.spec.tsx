import TitleView from '@components/BusinessViews/TitleView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<TitleView name={'TEST'} profilePicture='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' businessAddress='Test'/>)
  expect(toJSON()).toMatchSnapshot()
})

it('displays business address text matching parameters', () => {
  const { getByTestId } = render(<TitleView name={'TEST'} profilePicture={undefined} businessAddress={'TEST_ADDRESS'}/>)

  const businessAddressText = getByTestId('business-address-text')
  expect(businessAddressText).toHaveTextContent('TEST_ADDRESS')
})

it('does not display a profile picture if one is not defined', () => {
  const { getByTestId } = render(<TitleView name={'TEST'} profilePicture={undefined} businessAddress={'TEST_ADDRESS'}/>)

  const businessNameText = getByTestId('business-name-text')
  expect(businessNameText).toHaveTextContent('TEST')
})
