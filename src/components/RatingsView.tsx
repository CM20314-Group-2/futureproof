import RatingView from '@components/RatingView'
import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type ViewProps = Pick<DisplayableBusiness, 'customerScore' | 'sustainabilityScore'>

const RatingsView = ({ customerScore, sustainabilityScore}: ViewProps ) => (
  <View style={styles.compoundStyle}>
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
    marginLeft: '1%',
    marginBottom: '1%'
  },
  ratingsHorizontalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  compoundStyle: {
    marginBottom: '8%'
  }
})

export default RatingsView