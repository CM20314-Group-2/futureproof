import Color from 'color'
import React from 'react'
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'

interface ComponentProps {
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
const Pin = ({ rating, style } : ComponentProps) => {

  
  const colour = new Color('#080')

  return (
    <Pressable
      style={[style, styles.pressable]}
      testID='pin-pressable'
    >
      <View
        style={[styles.circle, { backgroundColor: colour.toString() }]}
        testID='pin'
      >
        <View
          style={[styles.rating_circle, { backgroundColor: colour.desaturate(0.25).toString() }]}
          testID='rating-background'
        >
          <Text style={styles.text}>{rating.toFixed(0)}</Text>
        </View>
      </View>
      <View style={[styles.triangle, { borderBottomColor: colour.toString() }]}/>
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
