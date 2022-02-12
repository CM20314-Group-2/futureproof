import RatingCapsule from '@components/search/RatingCapsule'
import { DisplayableBusiness } from '@typings/types'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LocationIcon from '../../../assets/icon_location.png'

const SearchItemStats = ({business}: {business: DisplayableBusiness}) => (
  <View style={styles.searchItemStats}>
    <Text style={styles.businessTitleText}>{business.name}</Text>
    <View style = {styles.logoAndSubtitleView}>
      <Image source={LocationIcon} style={styles.businessLogoImageStyle} resizeMode="contain"/>
      <Text style={styles.subtitleText}>{`${  .2} miles`}</Text>
    </View>
      
    <View style = {styles.ratingTextAndCapsuleView}>
      <Text style={styles.ratingText}>FutureProof Rating:</Text>
      <RatingCapsule ratingValue={business.sustainabilityScore}/>
    </View>
    <View style = {styles.ratingTextAndCapsuleView}>
      <Text style={styles.ratingText}>Consumer Rating:</Text>
      <RatingCapsule ratingValue={business.customerScore}/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  searchItemStats: {
    flex: 1,
    flexDirection: 'column'
  },
  businessTitleText: {
    fontSize: 25,
    fontWeight: '500'
  },
  subtitleText: {
    fontSize: 14,
    color: '#686868'
  },
  businessLogoImageStyle: {
    width: 20,
    height: 20
  },
  logoAndSubtitleView: {
    flexDirection: 'row'
  },
  ratingTextAndCapsuleView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 2
  },
  ratingText: {
    fontSize: 11,
    color: '#818181',
    paddingRight: 10
  }
})

export default SearchItemStats