import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CertificatesList from '@components/ratings/CertificatesList'
import RectangularRatingIndicator from '@components/ratings/RectangularRatingIndicator'
import { DisplayableBusiness, Rating } from '@futureproof/typings'

type ComponentProps = Pick<
  DisplayableBusiness,
  'sustainabilityScore' | 'sustainabilityCertificates' | 'sustainabilityRatings'
>

const RatingBreakdownItems = ({ ratings = [] } : { ratings ?: Rating[] }) => {
  return (
    <React.Fragment>
      {ratings.map((rating) => {
        return (
          <View key={rating.id} style={styles.rectangularRatingStyle}>
            <RectangularRatingIndicator progressValue={rating.ratingValue} ratingName={rating.ratingName}/>
          </View>
        )
      })}
    </React.Fragment>
  )
}

const FutureProofRatingView = ({ sustainabilityScore, sustainabilityCertificates, sustainabilityRatings } : ComponentProps ) => {
  return (
    <SafeAreaView style={styles.futureProofRatingViewStyle}>
      <ScrollView>
        <View style={styles.futureProofRatingTitleView}>
          <CircularRatingIndicator circleWidth={150} circleHeight={150} progressBarWidth={14} progressValue={sustainabilityScore ?? 0} ratingName={'FutureProof'}/>
          <CertificatesList certificates={sustainabilityCertificates}/>
        </View>
        <Text style={styles.headingText}>BREAKDOWN</Text>
        <RatingBreakdownItems ratings={sustainabilityRatings}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  futureProofRatingTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20
  },
  futureProofRatingViewStyle: {
    marginHorizontal: 30
  },
  headingText: {
    color: '#A0A0A0',
    fontSize: 12,
    paddingLeft: 20
  },
  rectangularRatingStyle: {
    paddingVertical: 5
  }
})

export default FutureProofRatingView
