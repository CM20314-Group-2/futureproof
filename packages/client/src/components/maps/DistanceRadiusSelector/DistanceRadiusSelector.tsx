import { Option } from '@components/common/OptionList'
import OptionSelector from '@components/common/OptionSelector'
import React from 'react'
import {
  StyleSheet,
  TextStyle,
  View,
  ViewStyle
} from 'react-native'

export const INITIAL_DISTANCE_INDEX = 2
export const DISTANCES : Option[] = [
  { label: '100 m', value: 100 },
  { label: '250 m', value: 250 },
  { label: '500 m', value: 500 },
  { label: '1 km', value: 1000 },
  { label: '1.5 km', value: 1500 },
  { label: '2 km', value: 2000 }
]

interface ComponentProps {
  buttonStyle ?: ViewStyle
  buttonTextStyle ?: TextStyle,
  onButtonPress : (selectedOption : Option) => void
}

const DistanceRadiusSelector = ({ buttonStyle, buttonTextStyle, onButtonPress } : ComponentProps) => {

  return (
    <View style={styles.view} pointerEvents='box-none'>
      <OptionSelector
        options={DISTANCES}
        initial={INITIAL_DISTANCE_INDEX}
        selectorTitle={'Choose Distance'}
        onButtonPress={ (selectedOption : Option) => onButtonPress(selectedOption) }
        buttonStyle={buttonStyle}
        buttonTextStyle={buttonTextStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginTop: 'auto',
  },
})

export default DistanceRadiusSelector
