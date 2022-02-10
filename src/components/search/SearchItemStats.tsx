import RatingCapsule from '@components/search/RatingCapsule'
import { DisplayableBusiness } from '@typings/types'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SearchItemStats = ({business}: {business: DisplayableBusiness}) => (
  <View style={styles.searchItemStats}>
    <Text style={styles.businessTitleText}>{business.name}</Text>
    <View style = {{flexDirection: 'row'}}>
      <Image source={{uri: '/assets/icon_location.png'}} style={{width: 20, height: 20}} resizeMode="contain"/>
      <Text style={styles.subtitleText}>{`${  .2} miles`}</Text>
    </View>
      
    <View style = {{flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 2}}>
      <Text style={styles.ratingText}>FutureProof Rating:</Text>
      <RatingCapsule ratingValue={business.sustainabilityScore}/>
    </View>
    <View style = {{flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 2}}>
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
  ratingText: {
    fontSize: 11,
    color: '#818181',
    paddingRight: 10
  }
})

export default SearchItemStats