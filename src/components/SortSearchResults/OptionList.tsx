import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export type Option = {
    label : string
    value : number | string
}

interface ComponentProps {
  options : Option[],
  initial : number,
  onChange : (selectedOption : Option) => void
}

const OptionList = ({ options, initial, onChange } : ComponentProps) => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[initial >= 0 && initial < options.length ? initial : 0])

  return (
    <View style={styles.container}>
      {options.map((option) => {
        return (
          <Pressable
            key={option.label}
            style={({ pressed }) => ({
              backgroundColor: pressed ? '#ededed' : '#ffffff',
              opacity: pressed ? 0.5 : 1,
              ...option === selectedOption ? styles.selected_option : styles.unselected_option,
              ...styles.option,
            })}
            onPress={() => {
              onChange(option)
              setSelectedOption(option)
            }}
            testID={`option-list-${option.value}`}
          >
            <Text
              style={[
                styles.text,
                option === selectedOption ? styles.selected_text : styles.unselected_text
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
    width: '60%'
  },
  option: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 5
  },
  selected_option: {
    backgroundColor: '#1ea853',
    borderColor: '#1ea853'
  },
  selected_text: {
    color: '#ffffff',
  },
  text: {
    fontSize: 15,
    padding: 5,
    textAlign: 'center'
  },
  unselected_option: {
    borderColor: '#ededed'
  },
  unselected_text: {
    color: '#000000'
  }
})

export default OptionList
