import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

const LabelInput = (props) => (
  // Move a box `View` component here
  <View style={styles.labelStyle}>
    <Text style={styles.headingText}>{props.label}</Text>
    <TextInput
      style={styles.bodyText}
      placeholder={props.placeholder}
      onChangeText={props.value}
      onSubmitEditing={props.onSubmitEditing}
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
