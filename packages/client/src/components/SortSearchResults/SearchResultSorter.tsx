import React, { useState } from 'react'
import {
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { sortOption as sortBy } from '../../cache'
import OptionSelector from '@components/SortSearchResults/OptionSelector'
import { Option } from '@components/SortSearchResults/OptionList'

const INITIAL_OPTION_INDEX = 4
const OPTIONS_LIST : Option[] = [
  { label: 'Name: A to Z', value: 'name_asc' },
  { label: 'Name: Z to A', value: 'name_desc' },
  { label: 'Distance: Near to Far', value: 'distance_asc' },
  { label: 'Distance: Far to Near', value: 'distance_desc' },
  { label: 'Rating: High to Low', value: 'rating_desc' },
  { label: 'Rating: Low to High', value: 'rating_asc' },
]

interface ComponentProps {
  buttonStyle ?: ViewStyle
  buttonTextStyle ?: TextStyle
}

/**
 * SearchResultSorter Component
 *
 * A button that, when pressed, reveals the different options that a user can use to sort, and applies the selected
 * sorting method to the search results. The button text updates with the label of the users chosen option whenever
 * the sorting method is changed.
 *
 * @param buttonStyle the styling for the button
 * @param buttonTextStyle the styling for the text of the button
 * @returns the button and bottom sheet that contains the sorting options
 */
const SearchResultSorter = ({ buttonStyle, buttonTextStyle } : ComponentProps) => {

  const [sortOption, setSortOption] = useState<Option>(OPTIONS_LIST[INITIAL_OPTION_INDEX])

  return (
    <View style={styles.view} pointerEvents='box-none'>
      <OptionSelector
        options={OPTIONS_LIST}
        initial={INITIAL_OPTION_INDEX}
        selectorTitle={'Choose Sorting Method'}
        buttonTextPrefix={'Sorting By - '}
        onButtonPress={ (selectedOption : Option) => {
          setSortOption(selectedOption)
          sortBy(sortOption.value)
        }}
        buttonStyle={buttonStyle}
        buttonTextStyle={buttonTextStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginTop: 'auto',
  },
})

export default SearchResultSorter
