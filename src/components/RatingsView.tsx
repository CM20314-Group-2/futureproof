import RatingView from '@components/RatingView'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RatingsView = ({ futureProofRating, userRating }: { futureProofRating: number; userRating: number} ) => (
  <View>
    <Text style={styles.headingText}>{'RATINGS'}</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <RatingView ratingName="FutureProof" ratingValue={futureProofRating} />
      <RatingView ratingName="Consumer" ratingValue={userRating} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  headingText: {
    fontSize: 12,
    color: '#A0A0A0',
    paddingLeft: 20
  },
})

export default RatingsView