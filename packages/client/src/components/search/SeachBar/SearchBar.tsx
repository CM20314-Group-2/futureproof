import { gql, makeVar, useLazyQuery } from '@apollo/client'
import { DisplayableBusiness } from '@futureproof/typings'
import debounce from 'lodash.debounce'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Input } from 'react-native-elements'

const GET_COMPANY_DATA = gql`
  query getBusiness ($_value: String!) {
    businessByName (name: $_value) {
      id
      name
      customerScore
      sustainabilityScore
      type
      profileText
      profilePicture
      images
      humanRightsScore
      carbonScore
      certificateScore
      envProtectionScore
      diversityScore
      productSafetyScore
      equalPayScore
      taxScore
      dataPrivacyScore
      charitableScore
    }
  }

 
`

export const searchResults = makeVar<DisplayableBusiness[]>([])

const SearchBar = () => {
  const [searchText, onChangeText] = useState('')

  const [executeSearch] = useLazyQuery<{
    businessByName : [DisplayableBusiness]
  }>(
    GET_COMPANY_DATA, { variables: { _value: searchText } }
  )

  useEffect(() => {
    if (searchText.length > 0) {
      debouncedSearch()
    }
  }, [searchText])

  const search = async () => {
    const { data } = await executeSearch()
    if (data !== undefined){
      searchResults(data.businessByName)
    } else {
      searchResults([])
    }
  }

  const debouncedSearch = useCallback(debounce(search, 700), [search])

  return (
    <React.Fragment>
      <View style={styles.searchBarView}>
        <Input
          testID='search-bar'
          inputContainerStyle={styles.searchInput}
          placeholder='Search here'
          onChangeText={(text) => onChangeText(text)}
          leftIcon={<Icon name='search' size={25} tvParallaxProperties />}
          leftIconContainerStyle={styles.leftContainerIconStyle}
          rightIcon={
            <Icon
              name='options-outline'
              type='ionicon'
              size={25}
              onPress={() => console.error('Not implemented.')} tvParallaxProperties/>
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
  searchBarView: {
    marginBottom: '3%',
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

export default SearchBar
