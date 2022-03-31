import { useReactiveVar } from '@apollo/client'
import { searchResults } from '@components/search/SeachBar'
import SearchResult from '@components/search/SearchResult'
import { NavigationProps } from '@futureproof/client/App'
import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native'

type ComponentProps = NavigationProps

const SearchView = ({ navigation } : ComponentProps) => {
  const results = useReactiveVar(searchResults)
  

  const renderSearchItem = ({ item } : { item : DisplayableBusiness }) => (
    <SearchResult
      business={item}
      onPress={() => {
        // Respond to business seletion tap here
        navigation.push('BusinessView', { business: item } )
      }}
    />
  )
  
  if (!results) return null
  
  return (
    <React.Fragment>
      <ScrollView style={styles.searchList}>
        <FlatList
          data={results}
          renderItem={renderSearchItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  searchList: {
    backgroundColor: '#f8f9fa',
    flex: 1,
    width: '90%',
  },
})

export default SearchView
