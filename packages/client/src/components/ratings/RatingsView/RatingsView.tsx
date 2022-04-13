import RatingView from '@components/ratings/RatingView'
import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type ComponentProps = Pick<
  DisplayableBusiness,
  'customerScore' | 'sustainabilityScore'
>

const RatingsView = ({
  customerScore,
  sustainabilityScore,
} : ComponentProps) => (
  <View style={styles.compoundStyle}>
    <Text style={styles.headingText}>RATINGS</Text>
    <View style={styles.ratingsHorizontalStyle}>
      <Pressable onPress={() => {return}}>
        <RatingView ratingName='Consumer' value={customerScore}/>
      </Pressable>
      <RatingView ratingName='FutureProof' value={sustainabilityScore}/>
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
