import RatingCapsule from '@components/search/RatingCapsule'
import { DisplayableBusiness, Location } from '@typings/types'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// CODE REQUIRED -> Fetch user location and business location and calculate distance between
function convertLocationToDistance(businessLocation: Location): number {
  return 1.2
}

const SearchItemStats = ({business}: {business: DisplayableBusiness}) => (
  <View style={styles.searchItemStats}>
    <Text style={styles.businessTitleText}>{business.name}</Text>
    <View style = {{flexDirection: 'row'}}>
      <Image source={require('../../../assets/icon_location.png')} style={{width: 20, height: 20}} resizeMode="contain"/>
      <Text style={styles.subtitleText}>{'0.0' + ' miles'}</Text>
    </View>
      
    <View style = {{flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 2}}>
      <Text style={styles.ratingText}>FutureProof Rating:</Text>
      <RatingCapsule ratingValue={business.sustainabilityScore || 0}/>
    </View>
    <View style = {{flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 2}}>
      <Text style={styles.ratingText}>Consumer Rating:</Text>
      <RatingCapsule ratingValue={business.customerScore || 0}/>
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
  ratingText: {
    fontSize: 11,
    color: '#818181',
    paddingRight: 10
  }
})

export default SearchItemStats