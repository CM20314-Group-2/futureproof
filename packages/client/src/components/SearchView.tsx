import SearchResult from '@components/Search/SearchResult'
import { BusinessType, DisplayableBusiness } from '@futureproof/typings'
import React, { useState } from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native'

const TEST_BUSINESSES_DATA: DisplayableBusiness[] = [
  {
    id: '1',
    name: 'Starbucks',
    profileText: 'This is a test business',
    sustainabilityScore: 100,
    customerScore: 65,
    type: BusinessType.Cafe,
    profilePicture:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
  },
]

const SearchView = () => {
  const [selectedId, setSelectedId] = useState(null)

  const renderSearchItem = ({ item } : { item : DisplayableBusiness }) => (
    <SearchResult
      business={item}
      onPress={() => {
        // Respond to business seletion tap here
        //navigation.push('BusinessView')
      }}
    />
  )
  return (
    <React.Fragment>
      <ScrollView style={styles.searchList}>
        <FlatList
          data={TEST_BUSINESSES_DATA}
          renderItem={renderSearchItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  searchList: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
})

export default SearchView
