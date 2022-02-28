import { gql, useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Icon, Input } from 'react-native-elements'

// GraphQL fragment
const COMPANY_TILE_DATA = gql` {
    fragment CompanyTile on Business{
        id
        name
        profilePicture
        sustainabilityScore
        customerScore
    }
}
`

const SearchBarView = () => {
  const [searchText, onChangeText] = useState('')
    
  const [executeSearch, { error }] = useLazyQuery(    // 'loading' and 'data' can also be returned (not just error)
    COMPANY_TILE_DATA
  )

  useEffect(() => {
    // Debounce query
    const delayDebounceFn = setTimeout(() => {
      executeSearch({
        variables: { String: searchText }
      }).then(data => console.log(data), () => console.error(error))
    }, 300) 
    return () => clearTimeout(delayDebounceFn)
  }, [searchText])

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.searchBarView}>
        <Input 
          inputContainerStyle={styles.searchInput}
          placeholder='Search here'
          onChangeText={text => onChangeText(text)}
          leftIcon = {
            <Icon
              name='search'
              size={25}
            />
          }
          leftIconContainerStyle = {styles.leftContainerIconStyle}
          rightIcon = {<Icon
            name='options-outline'
            type='ionicon'
            size={25}
            onPress={() => console.error('Not implemented.')}
          />
          }
          value={searchText}
        />
      </View>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  leftContainerIconStyle: {
    marginLeft:'2%'
  },
  safeAreaView: {
    flex:1,
    flexDirection: 'column',
    padding:20
  },
  searchBarView:{
    marginBottom:'10%',
    marginTop: 'auto',
  },
  searchInput: {
    backgroundColor:'#FFFFFF',
    borderColor:'#FFFFFF',
    borderRadius:10,
    borderWidth:2,
  }
})

export default SearchBarView
