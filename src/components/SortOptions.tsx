import { Option } from '@components/SearchResultSorter'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface ComponentProps {
  options: Option[]
  initial?: number | null
  onChange: React.Dispatch<React.SetStateAction<Option>>
}

/**
 * SortOptions Component -
 *
 * Component that allows for a list of sorting options to be created, in which only one can be selected at a time.
 *
 * @param options an object that contains a label for each option and a value for each option, the value must be one
 *                of the specified possible values in '@typings/Search'
 * @param initial the initial option that is selected, if not passed, then no initial value is selected
 * @param onChange the function that is called when the user clicks on an option
 * @returns a styled component that contains all of the sorting options
 */
const SortOptions = ({ options, initial, onChange }: ComponentProps) => {
  let initialOption = null

  if (initial !== undefined && initial !== null) {
    initialOption =
      initial >= 0 && initial < options.length ? options[initial] : null
  }

  const [userOption, setUserOption] = useState<Option | null>(initialOption)

  const updateOptionChoice = (option: Option) => {
    onChange(option)
    setUserOption(option)
  }

  return (
    <View style={styles.container}>
      {options.map((option) => {
        return (
          <Pressable
            key={option.value}
            style={({ pressed }) => ({
              backgroundColor: pressed ? '#ededed' : '#ffffff',
              opacity: pressed ? 0.5 : 1,
              ...(option === userOption
                ? styles.selected_option
                : styles.unselected_option),
              ...styles.option,
            })}
            onPress={() => updateOptionChoice(option)}
            testID={`sort-option-${option.value}`}
          >
            <Text
              style={[
                styles.text,
                option === userOption
                  ? styles.selected_text
                  : styles.unselected_text,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    marginBottom: 15,
    marginTop: 10,
    width: '60%',
  },
  option: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
  },
  selected_option: {
    backgroundColor: '#1ea853',
    borderColor: '#1ea853',
  },
  selected_text: {
    color: '#ffffff',
  },
  text: {
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
  },
  unselected_option: {
    borderColor: '#ededed',
  },
  unselected_text: {
    color: '#000000',
  },
})

export default SortOptions
