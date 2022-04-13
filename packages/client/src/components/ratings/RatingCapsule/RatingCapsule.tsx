import { Business } from '@futureproof/typings'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ratingToColour } from '../../../styles/index'

export const ratingToText = (ratingValue : number) : string => {
  if (ratingValue < 0 || ratingValue > 100) {
    throw new Error('ratingValue must be between 0 and 100')
  }
  
  if (ratingValue >= 85) return 'Great'
  else if (ratingValue >= 70) return 'Good'
  else if (ratingValue >= 50) return 'Okay'
  else if (ratingValue >= 30) return 'Bad'
  else return 'Avoid'
}

const RATING_CAPSULE_HEIGHT = 18

interface ComponentProps {
  ratingValue : Business['customerScore'] | Business['sustainabilityScore']
}

const RatingCapsule = ({ ratingValue = 0 } : ComponentProps) => (
  <View
    style={{
      ...styles.CapsuleStyle,
      backgroundColor: ratingToColour(ratingValue).toString(),
    }}
    testID='rating-capsule'
  >
    <Text style={styles.RatingText} testID='rating-text'>
      {ratingToText(ratingValue === null ? 0 : ratingValue)}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  CapsuleStyle: {
    alignItems: 'center',
    borderRadius: RATING_CAPSULE_HEIGHT / 2,
    height: RATING_CAPSULE_HEIGHT,
    width: 55,
  },
  RatingText: {
    color: 'white',
    fontSize: 11,
  },
})

export default RatingCapsule
