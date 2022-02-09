import SearchItemStats from '@components/search/SearchItemStats'
import { DisplayableBusiness } from '@typings/types'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

const BusinessLogo = ({logoURL}: {logoURL: string}) => (
  <View style={{paddingRight: 10}}>
    <Image source={{uri: logoURL}} style={{width: 58, height: 58}} resizeMode="contain"/>
  </View>
)

const SearchResult = ({ business, onPress }: {business : DisplayableBusiness, onPress: any}) => (
  <TouchableOpacity onPress={onPress}
    style={styles.searchItemStyle}
  >
    {business.profilePicture ? <BusinessLogo logoURL={business.profilePicture}/> : null}
    <SearchItemStats business={business}/>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  searchItemStyle: {
    backgroundColor: '#FAF9F9',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 25,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  }
})

export default SearchResult