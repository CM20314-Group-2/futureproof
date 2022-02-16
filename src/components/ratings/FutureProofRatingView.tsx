import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

const FutureProofRatingView = () => {
  return (
    <SafeAreaView style={styles.FutureProofRatingViewStyle}>
        <CircularRatingIndicator circleWidth={100} circleHeight={100} progressBarWidth={10} progressValue={70}/>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  FutureProofRatingViewStyle: {
    marginHorizontal: 30
  }
})

export default FutureProofRatingView