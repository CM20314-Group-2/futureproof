import React from 'react'
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'

interface ComponentProps {
  onPress: () => void
  text: string
  style?: ViewStyle
  textStyle?: TextStyle
}

/**
 * Button Component -
 *
 * A custom, reusable button component that has an opacity effect when pressed.
 *
 * @param onPress the function that gets called when the button is pressed
 * @param text the text that appears on the button
 * @param style the styling for the button, if not passed as an argument, a default is used
 * @param textStyle the styling for the text of the button, if not passed as an argument, a default is used
 * @returns the button component
 */
const Button = ({ onPress, text, style, textStyle }: ComponentProps) => {
  const buttonStyle =
    style !== null && style !== undefined ? style : styles.button
  const buttonTextStyle =
    textStyle !== null && textStyle !== undefined ? textStyle : styles.text
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1, ...buttonStyle })}
      onPress={onPress}
      testID='button'
    >
      <Text testID='button-text' style={buttonTextStyle}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1ea853',
    borderRadius: 5,
    justifyContent: 'center',
    width: '75%',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
  },
})

export default Button
