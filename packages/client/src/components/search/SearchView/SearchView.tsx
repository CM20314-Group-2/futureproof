import { useReactiveVar } from '@apollo/client'
import { globalData } from '@components/search/SeachBarView'
import SearchResult from '@components/search/SearchResult'
import { BusinessType, DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native'


const TEST_BUSINESSES_DATA : DisplayableBusiness[] = [
  {
    id: '1',
    name: 'Starbucks',
    profileText: 'This is a test business',
    sustainabilityScore: 100,
    customerScore: 65,
    type: BusinessType.Cafe,
    profilePicture:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
    images: [
      'https://cdn.vox-cdn.com/thumbor/VAkim2EiaKiIq4pUi295wH99Ces=/0x0:1100x729/1200x800/filters:focal(341x230:517x406)/cdn.vox-cdn.com/uploads/chorus_image/image/67717391/STARBUCKS.0.jpeg',
      'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-42658.jpg',
      'https://cdn.vox-cdn.com/thumbor/1WVT8VSapMXbHPvsTEPxZp2gUrk=/0x0:1347x897/1200x800/filters:focal(567x342:781x556)/cdn.vox-cdn.com/uploads/chorus_image/image/62192379/starbucksredcups2015.1541431580.jpg',
      'https://cdn.vox-cdn.com/thumbor/bSoWzne8VZvz8tavhebsL7DNik0=/0x0:5860x4008/1200x800/filters:focal(3243x1967:4179x2903)/cdn.vox-cdn.com/uploads/chorus_image/image/67132574/shutterstock_1410002591.0.jpg'
    ]
  },
]

const SearchView = () => {
  const results = useReactiveVar(globalData)
  

  const renderSearchItem = ({ item } : { item : DisplayableBusiness }) => (
    <SearchResult
      business={item}
      onPress={() => {
        // Respond to business seletion tap here
      }}
    />
  )
  
  if (!results) return null

  console.log(results)

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
