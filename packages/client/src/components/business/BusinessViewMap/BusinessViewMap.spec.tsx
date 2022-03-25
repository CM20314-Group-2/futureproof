import { ExampleLocationType } from '@components/business/BusinessView'
import BusinessViewMap from '@components/business/BusinessViewMap'
import { render } from '@testing-library/react-native'
import React from 'react'

const ExampleBusinessLocation : ExampleLocationType = {
  id: '1',
  address: 'Unit B Strahan House, Avon St, Bath BA1 1UN',
  latitude: 51.37758520597919,
  longitude: -2.3572347659685513
}

it('matches snapshot', () => {
  const { toJSON } = render(<BusinessViewMap businessLocation={ExampleBusinessLocation}/>)
  expect(toJSON()).toMatchSnapshot()
})
