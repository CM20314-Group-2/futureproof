import RatingView from '@components/RatingView'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DisplayableBusiness } from '@typings/types'

type ViewProps = Pick<DisplayableBusiness, 'customerScore' | 'sustainabilityScore'>

const RatingsView = ({ customerScore, sustainabilityScore}: ViewProps ) => (
  <View>
    <Text style={styles.headingText}>RATINGS</Text>
    <View style={styles.ratingsHorizontalStyle}>
      <RatingView ratingName={'FutureProof'} ratingValue={sustainabilityScore} />
      <RatingView ratingName={'Consumer'} ratingValue={customerScore} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  headingText: {
    fontSize: 12,
    color: '#A0A0A0',
    paddingLeft: 20
  },
  ratingsHorizontalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default RatingsView