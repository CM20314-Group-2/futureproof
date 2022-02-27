import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CertificatesList from '@components/ratings/CertificatesList'
import RectangularRatingIndicator from '@components/ratings/RectangularRatingIndicator'

const FutureProofRatingView = () => {
  return (
    <SafeAreaView style={styles.FutureProofRatingViewStyle}>
      <ScrollView>
        <View style={styles.FutureProofRatingTitleView}>
          <CircularRatingIndicator circleWidth={150} circleHeight={150} progressBarWidth={14} progressValue={70} ratingName={'FutureProof'}/>
          <CertificatesList/>
        </View>
        <Text style={styles.headingText}>BREAKDOWN</Text>
        <View style={styles.RectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={75} ratingName={'Carbon Emissions'}/>
        </View>
        <View style={styles.RectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={20} ratingName={'Working Conditions'}/>
        </View>
        <View style={styles.RectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={70} ratingName={'Ecosystem Impact'}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  FutureProofRatingTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20
  },
  FutureProofRatingViewStyle: {
    marginHorizontal: 30
  },
  RectangularRatingStyle: {
    paddingVertical: 5
  },
  headingText: {
    color: '#A0A0A0',
    fontSize: 12,
    paddingLeft: 20
  }
})

export default FutureProofRatingView
