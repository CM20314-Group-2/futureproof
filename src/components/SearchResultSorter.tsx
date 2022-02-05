import React, { useState } from 'react'
import { Platform, Pressable, SafeAreaView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import BottomSheet from './BottomSheet'
import Button from './Button'
import SortOptions from './SortOptions'
import {SortOptions as SortOptionsType} from '@typings/Search'
import {sortOption as sortBy} from '../cache'

const options: {label: string, value: SortOptionsType}[] = [
  { label: 'Name: A to Z', value: 'name_asc' },
  { label: 'Name: Z to A', value: 'name_desc' },
  { label: 'Distance: Near to Far', value: 'distance_asc' },
  { label: 'Distance: Far to Near', value: 'distance_desc' },
  { label: 'Rating: High to Low', value: 'rating_asc' },
  { label: 'Rating: Low to High', value: 'rating_desc' }
]

const INITIAL_OPTION_INDEX = 4

const SearchResultSorter = ({ buttonStyle, buttonTextStyle }: { buttonStyle?: ViewStyle, buttonTextStyle?: TextStyle}) => {
  const [sortOption, setSortOption] = useState<{label: string, value: SortOptionsType}>(options[INITIAL_OPTION_INDEX])
  const [showBottomSheet, setShowBottomSheet] = useState(false)

  const hide = () => {
    setShowBottomSheet(false)
  }

  return (
    <View style={styles.view}>
      <Pressable style={buttonStyle} onPress={ () => {setShowBottomSheet(true)} }>
        <Text style={buttonTextStyle}>Sorting by - {sortOption.label}</Text>
      </Pressable>
      <BottomSheet show={showBottomSheet} height={400} onOuterClick={hide}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Sort Results</Text>
          <SortOptions
            options={options}
            initial={INITIAL_OPTION_INDEX}
            onChange={ (option: React.SetStateAction<{label: string, value: SortOptionsType}>) => {setSortOption(option)} }
          />
          <Button
            onPress={ () => {
              sortBy(sortOption.value)
              console.log(sortBy())

              hide()
            } }
            text={'Apply'}
          />
        </SafeAreaView>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: Platform.OS === 'android' ? 35 : 0
  },
  title: {
    fontSize: 25,
    marginTop: 20
  },
  view: {
    marginTop: 'auto'
  }
})

export default SearchResultSorter