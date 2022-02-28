import * as Location from 'expo-location'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Circle } from 'react-native-maps'
import { Option } from '@components/OptionList'
import OptionSelector from '@components/OptionSelector'

const INITIAL_DISTANCE_INDEX = 2

const DISTANCES : Option[] = [
  { label: '100 m', value: 100 },
  { label: '250 m', value: 250 },
  { label: '500 m', value: 500 },
  { label: '1 km', value: 1000 },
  { label: '1.5 km', value: 1500 },
  { label: '2 km', value: 2000 }
]

/**
 * DistanceRadiusView Component
 *
 * A component that displays a radius around the user's location that has a distances that can be changed using a
 * button and a bottom sheet with different distance choices.
 *
 * @param location the user's location
 * @returns the distance radius view component
 */
const DistanceRadiusView = ({ location } : { location : Location.LocationObject }) => {
  const [distance, setDistance] = useState<Option>(DISTANCES[INITIAL_DISTANCE_INDEX])

  return (
    <View style={styles.view} pointerEvents='box-none'>
      <OptionSelector
        options={DISTANCES}
        initial={INITIAL_DISTANCE_INDEX}
        selectorTitle={'Choose Distance'}
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonText}
        onButtonPress={(selectedOption : Option) => setDistance(selectedOption)}
      />
      <Circle
        center={location.coords}
        radius={distance.value as number}
        strokeColor={'#188441'}
        strokeWidth={1}
        lineDashPhase={1}
        lineDashPattern={[4, 2]}
        testID='circle'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1ea853',
    borderColor: '#188441',
    borderRadius: 25,
    borderWidth: 2,
    height: 25,
    justifyContent: 'center',
    left: 15,
    top: -Dimensions.get('screen').height + 75,
    width: 80
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14
  },
  view: {
    marginTop: 'auto'
  }
})

export default DistanceRadiusView
