import CertificatesList from '@components/ratings/CertificateList'
import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import RatingBreakdownItems from '@components/ratings/RatingBreakdownItems'
import RatingBreakdownItemsAlt from '@components/ratings/RatingBreakdownItems/RatingBreakdownItemsAlt'
import { BusinessCertificate, DisplayableBusiness, Business, Rating } from '@futureproof/typings'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

type ComponentProps = Pick<
  DisplayableBusiness,
  'sustainabilityScore' | 'sustainabilityCertificates' | 'sustainabilityRatings'
>

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

  const ratings = []
  const ratingsNames = []

  ratings.push(route.params.businessToDisplay.humanRightsScore)
  ratings.push(route.params.businessToDisplay.carbonScore)
  ratings.push(route.params.businessToDisplay.certificateScore)
  ratings.push(route.params.businessToDisplay.envProtectionScore)
  ratings.push(route.params.businessToDisplay.diversityScore)
  ratings.push(route.params.businessToDisplay.productSafetyScore)
  ratings.push(route.params.businessToDisplay.equalPayScore)
  ratings.push(route.params.businessToDisplay.taxScore)
  ratings.push(route.params.businessToDisplay.dataPrivacyScore)
  ratings.push(route.params.businessToDisplay.charitableScore)
  
  ratingsNames.push('Human Rights Score')
  ratingsNames.push('Carbon Score')
  ratingsNames.push('Certificate Score')
  ratingsNames.push('ENV Protection Score')
  ratingsNames.push('Diversity Score')
  ratingsNames.push('Product Safety Score')
  ratingsNames.push('Equal Pay Score')
  ratingsNames.push('Tax Score')
  ratingsNames.push('Data Privacy Score')
  ratingsNames.push('Charitable Score')

  return (
    <SafeAreaView style={styles.futureProofRatingViewStyle}>
      <ScrollView>
        <View style={styles.futureProofRatingTitleView}>
          <CircularRatingIndicator circleWidth={150} circleHeight={150} progressBarWidth={14} progressValue={route.params.businessToDisplay.sustainabilityScore ?? 0} ratingName={'FutureProof'}/>
          <CertificatesList certificates={route.params.businessToDisplay.sustainabilityCertificates as BusinessCertificate[]}/>
        </View>
        <Text style={styles.headingText}>BREAKDOWN</Text>
        <RatingBreakdownItemsAlt susRatings={ratings} susRatingsNames={ratingsNames}/>
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
  ImageStyle: {
    flex: 1,
    resizeMode: 'contain',
    width: width * 0.85,
    height: width * 1.2

  }
})

export default FutureProofRatingView
