import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RatingView = ({ ratingName, ratingValue }: { ratingName: string; ratingValue: number} ) => (
  <View style={styles.itemBackgroundStyle}>
    <View style={{ alignItems: 'center' }}>
      <Text>{ratingName + ' Rating'}</Text>
      <Text style={styles.subtitleText}>{'Tap for Details'}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  itemBackgroundStyle: {
    backgroundColor: '#FAF9F9',
    borderRadius: 10
  },
  subtitleText: {
    fontSize: 10,
    color: '#A0A0A0'
  },
})

export default RatingView
