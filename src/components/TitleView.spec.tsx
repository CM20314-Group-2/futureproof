import TitleView from '@components/TitleView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(
    <TitleView
      name={'TEST'}
      profilePicture='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
    />
  )
  expect(toJSON()).toMatchSnapshot()
})

it('does not display a profile picture if one is not provided', () => {
  const { queryByTestId } = render(
    <TitleView name={'TEST'} profilePicture={null} />
  )
  expect(queryByTestId('profile-picture')).toBeNull()
})
