import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import { Business } from '@futureproof/typings'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ComponentProps {
  ratingName : 'FutureProof' | 'Consumer'
  value : Business['customerScore'] | Business['sustainabilityScore']
}

const RatingView = ({ ratingName, value } : ComponentProps) => (
  <View style={styles.itemBackgroundStyle}>
    <View style={styles.ratingContainerStyle}>
      <CircularRatingIndicator
        circleWidth={150}
        circleHeight={150}
        progressBarWidth={14}
        progressValue={value == null ? 0 : value}
        ratingName={ratingName}
      />
      <Text style={styles.subtitleText}>Tap for Details</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  itemBackgroundStyle: {
    backgroundColor: '#FAF9F9',
    borderRadius: 10,
    padding: 5,
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
