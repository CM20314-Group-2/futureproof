import Image from '@components/business/ImageCarousel/Image'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<Image
    key={0}
    onPressFunction={() => {console.log()}}
    ImageToDisplay={'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-42658.jpg'}
  />)
  expect(toJSON()).toMatchSnapshot()
})
