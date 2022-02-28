import React from 'react'
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'

interface ComponentProps {
  onPress: () => void,
  rating: number,
  style?: ViewStyle,
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
const Pin = ({onPress, rating, style}: ComponentProps) => {

  // if the rating is > 66 then the pin will be green, between 33 and 66 the pin will be yellow, and red if < 33
  const colour = rating >= 33 ? rating > 66 ? ['#1ea853', '#188441'] : ['#bed62e', '#a8bd29'] : ['#e2382d', '#842b18']

  return (
    <Pressable style={[style, {margin: 'auto'}]} onPress={onPress} testID='pin-pressable'>
      <View style={[styles.circle, {backgroundColor: colour[0]}]} testID='pin'>
        <View style={[styles.rating_circle, {backgroundColor: colour[1]}]} testID='rating-background'>
          <Text style={styles.text}>{rating}</Text>
        </View>
      </View>
      <View style={[styles.triangle, {borderBottomColor: colour[0]}]}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: 1
  },
  rating_circle:{
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12
  },
  triangle: {
    top: -11,
    left: 2,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 18,
    borderRightWidth: 18,
    borderBottomWidth: 28,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '180deg' }]
  }
})

export default Pin
