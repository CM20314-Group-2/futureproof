import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const ratingValToColour = (ratingValue: number): string => {
  if (ratingValue > 85) return '#1EA853'
  if (ratingValue > 70) return '#50A75C'
  if (ratingValue > 50) return '#BED62E'
  if (ratingValue > 30) return '#D6C52E'

  return 'brown'
}
  
export const ratingValToText = (ratingValue: number): string => {
  if (ratingValue > 85) return 'Great'
  if (ratingValue > 70) return 'Good'
  if (ratingValue > 50) return 'Okay'
  if (ratingValue > 30) return 'Bad'

  return 'Avoid'
}
const RATING_CAPSULE_HEIGHT = 18

const RatingCapsule = ({ratingValue = 0}: {ratingValue?: number | null}) => (
  <View style={StyleSheet.flatten([styles.CapsuleStyle, {backgroundColor: ratingValToColour(ratingValue == null ? 0 : ratingValue)}])}>
    <Text style={styles.RatingText}>{ratingValToText(ratingValue == null ? 0 : ratingValue)}</Text>
  </View>
)

const styles = StyleSheet.create({
  RatingText: {
    fontSize: 11,
    color: 'white'
  },
  CapsuleStyle: {
    alignItems: 'center',
    width: 55,
    height: RATING_CAPSULE_HEIGHT,
    borderRadius: RATING_CAPSULE_HEIGHT/2
  }
})

export default RatingCapsule