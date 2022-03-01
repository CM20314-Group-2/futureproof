import { Business } from '@futureproof/typings'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'

interface ComponentProps {
  ratingName: 'FutureProof' | 'Consumer'
  ratingValue: Business['customerScore'] | Business['sustainabilityScore']
}

const RatingView = ({ ratingName, ratingValue } : ComponentProps ) => (
  <View style={styles.itemBackgroundStyle}>
    <View style={styles.ratingContainerStyle}>
      <CircularRatingIndicator circleWidth={150} circleHeight={150} progressBarWidth={14} progressValue={ratingValue == null ? 0 : ratingValue} ratingName={ratingName}/>
      <Text style={styles.subtitleText}>Tap for Details</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  itemBackgroundStyle: {
    backgroundColor: '#FAF9F9',
    borderRadius: 10,
    padding: 5
  },
  ratingContainerStyle: {
    alignItems: 'center',
  },
  subtitleText: {
    color: '#A0A0A0',
    fontSize: 10,
  },
})

export default RatingView
