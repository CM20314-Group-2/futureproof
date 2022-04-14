import RatingView from '@components/ratings/RatingView'
import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import FutureProofRatingView from '@components/ratings/FutureProofRatingView'
import { NavigationProps } from '@futureproof/client/App'

interface Props {
  businessToDisplay : DisplayableBusiness
  navigation : NavigationProps
}

const RatingsView = ({
  businessToDisplay,
  navigation
} : Props) => (
  <View style={styles.compoundStyle}>
    <Text style={styles.headingText}>RATINGS</Text>
    <View style={styles.ratingsHorizontalStyle}>
      <Pressable onPress={() => {return}}>
        <RatingView ratingName='Consumer' ratingValue={businessToDisplay.customerScore}/>
      </Pressable>
      <Pressable onPress={() => {navigation.push('FutureProofRatingView', { businessToDisplay: businessToDisplay } )}}>
        <RatingView ratingName='FutureProof' ratingValue={businessToDisplay.sustainabilityScore}/>
      </Pressable>
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
