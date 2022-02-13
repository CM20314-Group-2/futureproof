import React from 'react'
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'

interface ComponentProps {
  onPress: () => void,
  text: string,
  style?: ViewStyle,
  textStyle?: TextStyle
}

/**
 * Button Component -
 *
 * A custom, reusable button component that has an opacity effect when pressed.
 *
 * @param onPress the function that gets called when the button is pressed
 * @param text the text that appears om the button
 * @param style the styling for the button, if not passed as an argument, a default is used
 * @param textStyle the styling for the text of the button, if not passed as an argument, a default is used
 * @returns the button component
 */
const Button = ({ onPress, text, style, textStyle } : ComponentProps) => {
  const buttonStyle = style !== null && style !== undefined ? style : styles.button
  const buttonTextStyle = textStyle !== null && textStyle !== undefined ? textStyle : styles.text
  return (
    <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1, ...buttonStyle })} onPress={onPress} testID='button'>
      <Text style={buttonTextStyle}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#1ea853',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10
  },
})

export default Button
