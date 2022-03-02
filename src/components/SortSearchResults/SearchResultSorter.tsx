import BottomSheet from '@components/SortSearchResults/BottomSheet'
import Button from '@components/Button'
import SortOptions from '@components/SortSearchResults/SortOptions'
import { SortOptions as SortOptionsType } from '@futureproof/typings'
import React, { useState } from 'react'
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { sortOption as sortBy } from '../../cache'

const INITIAL_OPTION_INDEX = 4 // config variable

const options: { label: string; value: SortOptionsType }[] = [
  { label: 'Name: A to Z', value: 'name_asc' },
  { label: 'Name: Z to A', value: 'name_desc' },
  { label: 'Distance: Near to Far', value: 'distance_asc' },
  { label: 'Distance: Far to Near', value: 'distance_desc' },
  { label: 'Rating: High to Low', value: 'rating_asc' },
  { label: 'Rating: Low to High', value: 'rating_desc' },
]

interface ComponentProps {
  buttonStyle?: ViewStyle
  buttonTextStyle?: TextStyle
}

/**
 * SearchResultSorter Component -
 *
 * A button that, when pressed, reveals the different options that a user can use to sort, and applies the selected
 * sorting method to the search results. The button text updates with the label of the users chosen option whenever
 * the sorting method is changed.
 *
 * @param buttonStyle the styling for the button
 * @param buttonTextStyle the styling for the text of the button
 * @returns the button and bottom sheet that contains the sorting options
 */
const SearchResultSorter = ({
  buttonStyle,
  buttonTextStyle,
}: ComponentProps) => {
  const [sortOption, setSortOption] = useState<{
    label: string
    value: SortOptionsType
  }>(options[INITIAL_OPTION_INDEX])
  const [showBottomSheet, setShowBottomSheet] = useState(false)

  const hideSortingOptions = () => {
    setShowBottomSheet(false)
  }

  return (
    <React.Fragment>
      <Pressable style={buttonStyle} onPress={() => setShowBottomSheet(true)}>
        <Text style={buttonTextStyle}>Sorting by - {sortOption.label}</Text>
      </Pressable>
      <BottomSheet
        show={showBottomSheet}
        height={400}
        onOuterClick={hideSortingOptions}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Sort Results</Text>
          <SortOptions
            options={options}
            initial={INITIAL_OPTION_INDEX}
            onChange={(
              option: React.SetStateAction<{
                label: string
                value: SortOptionsType
              }>
            ) => setSortOption(option)}
          />
          <Button
            onPress={() => {
              sortBy(sortOption.value)
              hideSortingOptions()
            }}
            text={'Apply'}
          />
        </View>
      </BottomSheet>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    // needed so that there is a margin at the bottom on android phones
    marginBottom: Platform.OS === 'android' ? 35 : 0,
    width: '100%',
  },
  title: {
    fontSize: 25,
    marginTop: 20,
  },
})

export default SearchResultSorter
