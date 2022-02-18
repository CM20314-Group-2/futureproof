import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CircularRatingIndicator from './ratings/CircularRatingIndicator'

const RatingView = ({ ratingName, ratingValue = 0 }: { ratingName: string; ratingValue?: number | null} ) => (
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
    padding: 5,
    borderRadius: 10
  },
  titleText: {
    fontWeight: 'bold'
  },
  subtitleText: {
    fontSize: 10,
    color: '#A0A0A0'
  },
  ratingContainerStyle: {
    alignItems: 'center'
  }
})

export default RatingView
