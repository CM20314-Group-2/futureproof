import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CertificatesList from '@components/ratings/CertificatesList'
import RatingBreakdownItems from '@components/ratings/RatingBreakdownItems'
import { BusinessCertificate, DisplayableBusiness, Rating } from '@futureproof/typings'

type ComponentProps = Pick<
  DisplayableBusiness,
  'sustainabilityScore' | 'sustainabilityCertificates' | 'sustainabilityRatings'
>

/**
 * This function creates the whole FutureProof rating view, including certificates and individual ratings breakdown.
 * 
 * @param {Maybe<number> | undefined} sustainabilityScore The sustainability score
 * @param {Maybe<Maybe<BusinessCertificate>[]> | undefined} sustainabilityCertificates An array of certificates for this business
 * @param {Maybe<Maybe<Rating>[]> | undefined} sustainabilityRatings An array of ratings for this business
 * @returns {View} The FutureProof Rating (breakdown) view
 */

const FutureProofRatingView = ({ sustainabilityScore, sustainabilityCertificates, sustainabilityRatings } : ComponentProps ) => {
  return (
    <SafeAreaView style={styles.futureProofRatingViewStyle}>
      <ScrollView>
        <View style={styles.futureProofRatingTitleView}>
          <CircularRatingIndicator circleWidth={150} circleHeight={150} progressBarWidth={14} progressValue={sustainabilityScore ?? 0} ratingName={'FutureProof'}/>
          <CertificatesList certificates={sustainabilityCertificates as BusinessCertificate[]}/>
        </View>
        <Text style={styles.headingText}>BREAKDOWN</Text>
        <RatingBreakdownItems ratings={sustainabilityRatings as Rating[]}/>
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
  }
})

export default FutureProofRatingView
