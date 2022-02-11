import BusinessLogo from '@components/search/BusinessLogo'
import SearchItemStats from '@components/search/SearchItemStats'
import { DisplayableBusiness } from '@typings/types'
import React from 'react'
import { StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'

const SearchResult = ({ business, onPress }: {business : DisplayableBusiness, onPress: (event: GestureResponderEvent) => void }) => (
  <TouchableOpacity onPress={onPress} style={styles.searchItemStyle}>
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
  logoContainerViewStyle: {
    paddingRight: 10
  },
  logoStyle: {
    width: 58,
    height: 58
  }
})

export default SearchResult