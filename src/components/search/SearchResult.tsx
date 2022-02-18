import BusinessLogo from '@components/search/BusinessLogo'
import SearchItemStats from '@components/search/SearchItemStats'
import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native'

interface ComponentProps {
  business : DisplayableBusiness,
  onPress : (event : GestureResponderEvent) => void
}

const SearchResult = ({ business, onPress } : ComponentProps ) => (
  <TouchableOpacity onPress={onPress} style={styles.searchItemStyle}>
    {/* Don't use null check built in BusinessLogo to match design */}
    {business.profilePicture
      ? <BusinessLogo profilePicture={business.profilePicture}/>
      : null}
    <SearchItemStats {...business}/>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  logoContainerViewStyle : {
    paddingRight : 10
  },
  logoStyle : {
    height : 58,
    width : 58
  },
  searchItemStyle : {
    alignItems : 'center',
    backgroundColor : '#FAF9F9',
    borderRadius : 10,
    flexDirection : 'row',
    marginHorizontal : 25,
    marginVertical : 10,
    padding : 12
  }
})

export default SearchResult