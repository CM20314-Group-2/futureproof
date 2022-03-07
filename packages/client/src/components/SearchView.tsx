import SearchResult from '@components/Search/SearchResult'
import { BusinessType, DisplayableBusiness } from '@futureproof/typings'
import React, { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

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

const ExampleBusiness: DisplayableBusiness = {
  id: '1',
  name: 'Starbucks',
  profileText: 'This is a test business',
  sustainabilityScore: 100,
  customerScore: 65,
  type: BusinessType.Cafe,
  profilePicture:
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
}

type RootStackParamList = {
  MapView: undefined
  BusinessView: { businessToDisplay: DisplayableBusiness }
}

type Props = StackScreenProps<RootStackParamList>

const SearchView = ({ navigation }: Props) => {
  const [selectedId, setSelectedId] = useState(null)

  const renderSearchItem = ({ item }: { item: DisplayableBusiness }) => (
    <SearchResult
      business={item}
      onPress={() => {
        // Respond to business seletion tap here
        navigation.push('BusinessView', { businessToDisplay: ExampleBusiness })
      }}
    />
  )
  return (
    <React.Fragment>
      <View style={styles.searchList}>
        <FlatList
          data={TEST_BUSINESSES_DATA}
          renderItem={renderSearchItem}
          keyExtractor={(item) => item.id}
        />
      </View>
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
