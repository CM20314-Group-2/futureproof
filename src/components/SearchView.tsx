import SearchResult from '@components/search/SearchResult'
import { BusinessType, DisplayableBusiness } from '@typings/types'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'

const TEST_BUSINESSES_DATA: DisplayableBusiness[] = [
  {
    id: '1',
    name: 'Starbucks',
    profileText: 'This is a test business',
    sustainabilityScore: 100,
    customerScore: 65,
    type: BusinessType.Cafe,
    profilePicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
  }
]

const SearchView = () => {
  const [selectedId, setSelectedId] = useState(null)

  const renderSearchItem = ({ item } : { item : DisplayableBusiness}) => (
    <SearchResult
      business={item}
      onPress={ () => {
        // Respond to business seletion tap here
      }}
    />
  )
  return (
    <SafeAreaView style={styles.searchList}>
      <FlatList
        data={TEST_BUSINESSES_DATA}
        renderItem={renderSearchItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchList: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})

export default SearchView