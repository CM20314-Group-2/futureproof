import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

interface ComponentProps {
  label : string
  placeholder : string
  value : string
  onChangeText : () => void
  secureText : boolean
}


const LabelInput = (props : ComponentProps) => (
  // Move a box `View` component here
  <View style={styles.labelStyle}>
    <Text style={styles.headingText}>{props.label}</Text>
    <TextInput
      style={styles.bodyText}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureText}
    />
  </View>
)

const styles = StyleSheet.create({
  bodyText: {
    borderBottomWidth: 2,
    fontSize: 20,
    padding: '5%',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '2%',
  },
  labelStyle: {
    padding: '5%',
  },
})

export default LabelInput
