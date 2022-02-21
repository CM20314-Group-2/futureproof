import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RatingView = ({ ratingName, ratingValue = 0 }: { ratingName: string; ratingValue?: number | null} ) => (
  <View style={styles.itemBackgroundStyle}>
    <View style={styles.ratingContainerStyle}>
      <Text style={styles.titleText}>{`${ratingName} Rating`}</Text>
      <Text>{ratingValue == null ? 0 : ratingValue}</Text>
      <Text style={styles.subtitleText}>Tap for Details</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  itemBackgroundStyle: {
    backgroundColor: '#FAF9F9',
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
