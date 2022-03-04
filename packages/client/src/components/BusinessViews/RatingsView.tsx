import RatingView from '@components/RatingView'
import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type ComponentProps = Pick<
  DisplayableBusiness,
  'customerScore' | 'sustainabilityScore'
>

const RatingsView = ({
  customerScore,
  sustainabilityScore,
}: ComponentProps) => (
  <View style={styles.compoundStyle}>
    <Text style={styles.headingText}>RATINGS</Text>
    <View style={styles.ratingsHorizontalStyle}>
      <RatingView
        ratingName={'FutureProof'}
        ratingValue={sustainabilityScore}
      />
      <RatingView ratingName={'Consumer'} ratingValue={customerScore} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  compoundStyle: {
    marginBottom: '8%',
  },
  headingText: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: '1%',
    marginLeft: '1%',
    paddingLeft: 20,
  },
  ratingsHorizontalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default RatingsView
