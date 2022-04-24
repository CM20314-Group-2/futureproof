import { gql, useQuery } from '@apollo/client'
import CertificatesList from '@components/ratings/CertificateList'
import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import RatingBreakdownItemsAlt from '@components/ratings/RatingBreakdownItems'
import { RootStackParamList } from '@futureproof/client/App'
import { Business, BusinessCertificate, DisplayableBusiness, Rating } from '@futureproof/typings'
import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const GET_SCORES = gql`
  query GetBusinessScores($id: ID!){
    business(id: $id) {
      carbonScore
      certificateScore
      charitableScore
      customerScore
      dataPrivacyScore
      diversityScore
      envProtectionScore
      equalPayScore
      humanRightsScore
      taxScore
      productSafetyScore
    }
  }
`

export interface ComponentProps {business : DisplayableBusiness}

interface Props {
  route : Pick<RouteProp<RootStackParamList, 'FutureProofRatingView'>, 'params'>
}

/**
 * This view provides a break down of a given business' FutureProof rating, including certificates and listed individual ratings.
 */
const FutureProofRatingView = ({ route: { params: { business : { id, sustainabilityScore, sustainabilityCertificates } }  } } : Props ) => {
  const { loading, data  } = useQuery<{business : Pick<Business, 'carbonScore' | 'certificateScore' | 'charitableScore' | 'customerScore' | 'dataPrivacyScore' | 'diversityScore' | 'envProtectionScore' | 'equalPayScore' | 'humanRightsScore' | 'taxScore' | 'productSafetyScore'>}>(GET_SCORES, { variables: {
    id 
  } })
  console.log('loading', loading)
  console.log('data', data)
  const { business } = data || {}

  if (loading || business === undefined) {
    return <View/>
  }

  
  const ratings : Rating[] = [
    {
      id : '1',
      ratingName : 'Human Rights Score',
      ratingValue : Number(business.humanRightsScore)
    },
    {
      id : '2',
      ratingName : 'Carbon Score',
      ratingValue : Number(business.carbonScore)
    },
    {
      id : '3',
      ratingName : 'Certificate Score',
      ratingValue : Number(business.certificateScore)
    },
    {
      id : '4',
      ratingName : 'ENV Protection Score',
      ratingValue : Number(business.envProtectionScore)
    },
    {
      id : '5',
      ratingName : 'Diversity Score',
      ratingValue : Number(business.diversityScore)
    },
    {
      id : '6',
      ratingName : 'Product Safety Score',
      ratingValue : Number(business.productSafetyScore)
    },
    {
      id : '7',
      ratingName : 'Equal Pay Score',
      ratingValue : Number(business.equalPayScore)
    },
    {
      id : '8',
      ratingName : 'Tax Score Score',
      ratingValue : Number(business.taxScore)
    },
    {
      id : '9',
      ratingName : 'Data Privacy Score',
      ratingValue : Number(business.dataPrivacyScore)
    },
    {
      id : '10',
      ratingName : 'Charitable Score',
      ratingValue : Number(business.charitableScore)
    },


  ]
  return (
    <SafeAreaView style={styles.futureProofRatingViewStyle}>
      <ScrollView>
        <View style={styles.futureProofRatingTitleView}>
          <CircularRatingIndicator circleWidth={150} circleHeight={150} progressBarWidth={14} progressValue={sustainabilityScore ?? 0} ratingName={'FutureProof'}/>
          <CertificatesList certificates={sustainabilityCertificates as BusinessCertificate[]}/>
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
    justifyContent: 'center',
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
