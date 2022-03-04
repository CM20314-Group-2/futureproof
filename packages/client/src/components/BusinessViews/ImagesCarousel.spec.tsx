import ImagesCarousel from '@components/ImagesCarousel'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<ImagesCarousel />)
  expect(toJSON()).toMatchSnapshot()
})
