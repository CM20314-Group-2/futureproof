import BusinessLogo from '@components/search/BusinessLogo'
import SearchItemStats from '@components/search/SearchItemStats'
import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

interface ComponentProps {
  business : DisplayableBusiness
  onPress : (event : GestureResponderEvent) => void
}

const SearchResult = ({ business, onPress } : ComponentProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.searchItemStyle}>
      {/* Don't use null check built in BusinessLogo to match design */}
      {business.profilePicture ? (
        <BusinessLogo profilePicture={business.profilePicture} />
      ) : null}
      <SearchItemStats {...business} />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  searchItemStyle: {
    alignItems: 'center',
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 10,
    padding: 12,
  },
})

export default SearchResult
