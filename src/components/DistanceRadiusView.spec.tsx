import { fireEvent, render } from '@testing-library/react-native'
import { LocationObject } from 'expo-location'
import React from 'react'
import DistanceRadiusView from '@components/DistanceRadiusView'

const fakeLocation : LocationObject = {
  coords: {
    latitude: 1,
    longitude: 2,
    altitude: 3,
    accuracy: 4,
    heading: 5,
    speed: 6,
    altitudeAccuracy: 7
  },
  timestamp: 7,
}

const distances = [100, 250, 500, 1000, 1500, 2000]

it('matches snapshot', () => {
  const { toJSON } = render(<DistanceRadiusView location={fakeLocation}/>)
  expect(toJSON()).toMatchSnapshot()
})

it('has the default radius of the circle at 500m', () => {
  const { getByTestId } = render(<DistanceRadiusView location={fakeLocation}/>)

  const circle = getByTestId('circle')
  expect(circle).toHaveProp('radius', 500)
})

test.each(distances)('has a circle with a radius of %dm when the %dm option is selected', (distance) => {
  const { getByTestId } = render(<DistanceRadiusView location={fakeLocation}/>)

  const button = getByTestId('option-selector-button')
  fireEvent.press(button)

  const option = getByTestId(`option-list-${distance}`)
  fireEvent.press(option)

  const applyButton = getByTestId('button')
  fireEvent.press(applyButton)

  const circle = getByTestId('circle')
  expect(circle).toHaveProp('radius', distance)
})
