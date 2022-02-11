import {useState, useEffect} from 'react'
import { SafeAreaView, View, StyleSheet} from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { gql, useLazyQuery} from '@apollo/client'

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

const SearchBar = () => {
  // Search field
  const [value, onChangeText] = useState('')
    
  // Query
  const [executeSearch, {error}] = useLazyQuery(    // 'loading' and 'data' can also be returned (not just error)
    COMPANY_TILE_DATA
  )

  // Debounce query
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      executeSearch({
        variables: {String: value}
      }).then(data => console.log(data), () => console.error(error))
    }, 300) 
    return () => clearTimeout(delayDebounceFn)
  }, [value])

    
    
  const updateSearch = (text : string) => {
    onChangeText(text)
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.searchBarView}>
        <Input 
          inputContainerStyle={styles.searchInput}
          placeholder='Search here'
          onChangeText={text => updateSearch(text)}

          // Search Icon
          leftIcon = {
            <Icon
              name='search'
              size={25}
            />
          }
          leftIconContainerStyle = {{marginLeft:'2%'}}

          // Filter Icon
          rightIcon = {<Icon
            name='options-outline'
            type='ionicon'
            size={25}
            onPress={() => console.error('Not implemented.')}
          />
          }
          value={value}
        />
      </View>
    </SafeAreaView>
        
  )
} 

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1,
    padding:20,
    flexDirection: 'column'
  },
  searchInput: {
    borderRadius:10,
    borderWidth:2,
    borderColor:'#FFFFFF',
    backgroundColor:'#FFFFFF',
  },
  searchBarView:{
    marginTop: 'auto',
    marginBottom:'10%',
  }
})

export default SearchBar