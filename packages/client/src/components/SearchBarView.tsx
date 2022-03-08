import { gql, useLazyQuery, makeVar } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Input } from 'react-native-elements'

const GET_COMPANY_DATA = gql`
  query getBussiness ($_value: String!) {
    businessByName (name:$_value) {
      id
      name
      profilePicture
      sustainabilityScore
      customerScore
    }
  }
`

export const globalData = makeVar([])

const SearchBarView = () => {
  const [searchText, onChangeText] = useState('')

  const [executeSearch, { data, error }] = useLazyQuery(
    GET_COMPANY_DATA, { variables: { _value: searchText } }
  )

  useEffect(() => {
    // Debounce query
    const delayDebounceFn = setTimeout(() => {
      executeSearch().then(_data => globalData(data), (error) => console.log(error))
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [searchText])

  return (
    <React.Fragment>
      <View style={styles.searchBarView}>
        <Input
          testID='search-bar'
          inputContainerStyle={styles.searchInput}
          placeholder='Search here'
          onChangeText={(text) => onChangeText(text)}
          leftIcon={<Icon name='search' size={25} />}
          leftIconContainerStyle={styles.leftContainerIconStyle}
          rightIcon={
            <Icon
              name='options-outline'
              type='ionicon'
              size={25}
              onPress={() => console.error('Not implemented.')}
            />
          }
          value={searchText}
        />
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  leftContainerIconStyle: {
    marginLeft: '5%',
  },
  safeAreaView: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  searchBarView: {
    marginBottom: '10%',
    marginTop: 'auto',
  },
  searchInput: {
    alignSelf: 'center',
    backgroundColor: '#E7E7E7',
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    opacity: 1,
    width: '90%',
  },
})

export default SearchBarView
