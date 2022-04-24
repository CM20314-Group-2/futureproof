import RatingView from '@components/ratings/RatingView'
import { NavigationProps } from '@futureproof/client/App'
import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'



interface Props {
  business : DisplayableBusiness
  navigation : NavigationProps
}

const RatingsView = ({
  business,
  navigation,
} : Props) => {
  return (
    <View style={styles.compoundStyle}>
      <Text style={styles.headingText}>RATINGS</Text>
      <View style={styles.ratingsHorizontalStyle}>
        <Pressable onPress={() => {
          navigation.navigation.push('FutureProofRatingView', { business } )}}>
          <RatingView ratingName='FutureProof' ratingValue={business.sustainabilityScore}/>
        </Pressable>
      </View>
    </View>
  )}

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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default RatingsView
