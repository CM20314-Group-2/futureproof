import CertificatesList from '@components/ratings/CertificateList'
import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import RatingBreakdownItemsAlt from '@components/ratings/RatingBreakdownItems/RatingBreakdownItemsAlt'
import { BusinessCertificate, Business, Rating } from '@futureproof/typings'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

type RootStackParamList = {
  FutureProofRatingView : { businessToDisplay : Business }
}

type Props = StackScreenProps<RootStackParamList>

const width = Dimensions.get('window').width

/**
 * This view provides a break down of a given business' FutureProof rating, including certificates and listed individual ratings.
 * 
 * @param {Maybe<number> | undefined} sustainabilityScore The sustainability score
 * @param {Maybe<Maybe<BusinessCertificate>[]> | undefined} sustainabilityCertificates An array of certificates for this business
 * @param {Maybe<Maybe<Rating>[]> | undefined} sustainabilityRatings An array of ratings for this business
 * @returns {View} The FutureProof Rating (breakdown) view
 */

const FutureProofRatingView = ({ route } : Props ) => {

  const ratings : Rating[] = [
    {
      id : '1',
      ratingName : 'Human Rights Score',
      ratingValue : route.params.businessToDisplay.humanRightsScore as number
    },
    {
      id : '2',
      ratingName : 'Carbon Score',
      ratingValue : route.params.businessToDisplay.carbonScore as number
    },
    {
      id : '3',
      ratingName : 'Certificate Score',
      ratingValue : route.params.businessToDisplay.certificateScore as number
    },
    {
      id : '4',
      ratingName : 'ENV Protection Score',
      ratingValue : route.params.businessToDisplay.envProtectionScore as number
    },
    {
      id : '5',
      ratingName : 'Diversity Score',
      ratingValue : route.params.businessToDisplay.diversityScore as number
    },
    {
      id : '6',
      ratingName : 'Product Safety Score',
      ratingValue : route.params.businessToDisplay.productSafetyScore as number
    },
    {
      id : '7',
      ratingName : 'Equal Pay Score',
      ratingValue : route.params.businessToDisplay.equalPayScore as number
    },
    {
      id : '8',
      ratingName : 'Tax Score Score',
      ratingValue : route.params.businessToDisplay.taxScore as number
    },
    {
      id : '9',
      ratingName : 'Data Privacy Score',
      ratingValue : route.params.businessToDisplay.dataPrivacyScore as number
    },
    {
      id : '10',
      ratingName : 'Charitable Score',
      ratingValue : route.params.businessToDisplay.charitableScore as number
    },


  ]

  return (
    <SafeAreaView style={styles.futureProofRatingViewStyle}>
      <ScrollView>
        <View style={styles.futureProofRatingTitleView}>
          <CircularRatingIndicator circleWidth={150} circleHeight={150} progressBarWidth={14} progressValue={route.params.businessToDisplay.sustainabilityScore ?? 0} ratingName={'FutureProof'}/>
          <CertificatesList certificates={route.params.businessToDisplay.sustainabilityCertificates as BusinessCertificate[]}/>
        </View>
        <Text style={styles.headingText}>BREAKDOWN</Text>
        <RatingBreakdownItemsAlt ratingsToDisplay={ratings} />
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
