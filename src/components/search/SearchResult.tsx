import SearchItemStats from '@components/search/SearchItemStats'
import { DisplayableBusiness } from '@typings/types'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View, GestureResponderEvent } from 'react-native'

type LogoProps = Pick<DisplayableBusiness, 'profilePicture'>

const BusinessLogo = ({profilePicture}: LogoProps) => (
  <View style={{paddingRight: 10}}>
    <Image source={{uri: profilePicture}} style={styles.logoStyle} resizeMode="contain"/>
  </View>
)

const SearchResult = ({ business, onPress }: {business : DisplayableBusiness, onPress: (event: GestureResponderEvent) => void }) => (
  <TouchableOpacity onPress={onPress}
    style={styles.searchItemStyle}
  >
    {business.profilePicture ? <BusinessLogo profilePicture={business.profilePicture}/> : null}
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
  },
  logoStyle: {
    width: 58,
    height: 58
  }
})

export default SearchResult