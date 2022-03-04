import React from 'react'
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'

interface ComponentProps {
  onPress : () => void,
  rating : number,
  style ?: ViewStyle
}

/**
 * Pin Component
 *
 * @param onPress the function that gets called when the pin is pressed
 * @param rating the rating of the business that the pin is pointing to, it is also displayed on the pin
 *               and used to generate the colour of the pin
 * @param style the styling for the pressable so it can be moved and scaled if needed
 * @returns a custom pin component
 */
const Pin = ({ onPress, rating, style } : ComponentProps) => {

  // if the rating is > 66 then the pin will be green, between 33 and 66 the pin will be yellow, and red if < 33
  const colour = rating >= 33 ? rating > 66 ? ['#1ea853', '#188441'] : ['#bed62e', '#a8bd29'] : ['#e2382d', '#842b18']

  return (
    <Pressable
      style={[style, styles.pressable]}
      onPress={onPress}
      testID='pin-pressable'
    >
      <View
        style={[styles.circle, { backgroundColor: colour[0] }]}
        testID='pin'
      >
        <View
          style={[styles.rating_circle, { backgroundColor: colour[1] }]}
          testID='rating-background'
        >
          <Text style={styles.text}>{rating}</Text>
        </View>
      </View>
      <View style={[styles.triangle, { borderBottomColor: colour[0] }]}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    borderRadius: 20,
    elevation: 1,
    height: 40,
    justifyContent: 'center',
    width: 40,
    zIndex: 1
  },
  pressable: {
    margin: 'auto'
  },
  rating_circle:{
    alignItems: 'center',
    borderRadius: 14,
    height: 28,
    justifyContent: 'center',
    width: 28
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  triangle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 28,
    borderLeftColor: 'transparent',
    borderLeftWidth: 18,
    borderRightColor: 'transparent',
    borderRightWidth: 18,
    borderStyle: 'solid',
    height: 0,
    left: 2,
    top: -11,
    transform: [{ rotate: '180deg' }],
    width: 0
  }
})

export default Pin
