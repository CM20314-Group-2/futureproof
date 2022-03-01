import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CertificatesList from '@components/ratings/CertificatesList'
import RectangularRatingIndicator from '@components/ratings/RectangularRatingIndicator'
import { DisplayableBusiness } from '@futureproof/typings'
import { BusinessCertificate } from '@components/ratings/CertificateLabel'

const BUSINESS_CERTIFICATES : BusinessCertificate[] = [
  {
    id: 1234,
    certificateName: 'BCorp',
    businessHasCertificate: true
  },
  {
    id: 5678,
    certificateName: 'GBB',
    businessHasCertificate: false
  },
  {
    id: 9012,
    certificateName: 'Green Mark',
    businessHasCertificate: false
  }
]

const FutureProofRatingView = ({ businessToDisplay } : { businessToDisplay : DisplayableBusiness }) => {
  return (
    <SafeAreaView style={styles.futureProofRatingViewStyle}>
      <ScrollView>
        <View style={styles.futureProofRatingTitleView}>
          <CircularRatingIndicator circleWidth={150} circleHeight={150} progressBarWidth={14} progressValue={businessToDisplay.sustainabilityScore ?? 0} ratingName={'FutureProof'}/>
          <CertificatesList certificates={BUSINESS_CERTIFICATES}/>
        </View>
        <Text style={styles.headingText}>BREAKDOWN</Text>
        <View style={styles.rectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={75} ratingName={'Carbon Emissions'}/>
        </View>
        <View style={styles.rectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={20} ratingName={'Working Conditions'}/>
        </View>
        <View style={styles.rectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={95} ratingName={'Ecosystem Impact'}/>
        </View>
        <View style={styles.rectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={51} ratingName={'Pay distibution'}/>
        </View>
        <View style={styles.rectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={85} ratingName={'Discrimination and Diversity'}/>
        </View>
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
