import BottomSheet from '@components/common/BottomSheet'
import Button from '@components/common/Button'
import OptionList, { Option } from '@components/common/OptionList'
import React, { useState } from 'react'
import { Platform, Pressable, SafeAreaView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

interface ComponentProps {
  options : Option[],
  initial : number,
  buttonStyle ?: ViewStyle,
  buttonTextStyle ?: TextStyle,
  selectorTitle : string,
  buttonTextPrefix ?: string
  onButtonPress : (selectedOption : Option) => void
}

const OptionSelector = ({ options, initial, buttonStyle, buttonTextStyle, selectorTitle, buttonTextPrefix, onButtonPress } : ComponentProps) => {
  const [userOption, setUserOption] = useState(options[initial])
  const [showBottomSheet, setShowBottomSheet] = useState(false)

  return (
    <View style={styles.view}>
      <Pressable
        style={buttonStyle}
        onPress={ () => setShowBottomSheet(true) }
        testID='option-selector-button'
      >
        <Text
          style={buttonTextStyle}
          testID='option-selector-button-text'
        >
          {(buttonTextPrefix !== undefined ?  buttonTextPrefix : '') + userOption.label}
        </Text>
      </Pressable>
      <BottomSheet
        show={showBottomSheet}
        height={480}
        onOuterClick={() => setShowBottomSheet(false)}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>{selectorTitle}</Text>
          <OptionList
            options={options}
            initial={initial}
            onChange={(selectedOption : Option) => setUserOption(selectedOption)}
          />
          <Button
            onPress={() => {
              onButtonPress(userOption)
              setShowBottomSheet(false)
            }}
            text={'Apply'}
          />
        </SafeAreaView>
      </BottomSheet>
    </View>
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
  view: {
    marginTop: 'auto',
  },
})

export default OptionSelector
