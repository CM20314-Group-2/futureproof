import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const AccountView = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <ScrollView>
      <LabelInput
        label='Password'
        placeholder='Please enter your password'
        value={(text) => setPassword(text)}
        secureText
      />
      <LabelInput
        label='Confirm Password'
        placeholder='Please re-enter your password'
        value={(text) => setConfirmPassword(text)}
        secureText
      />
      <Button
        onPress={confirmPasswordsMatch(password, confirmPassword)}
        title='Change Password'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />
      <Image
        style={styles.bottomImageStyle}
        source={require('../../../assets/Bottom_Image_Styling.png')}
      />
    </ScrollView>
  )
}

const LabelInput = (props) => (
  // Move a box `View` component here
  <View style={{ padding: '5%' }}>
    <Text style={{ fontWeight: 'bold', marginBottom: '2%' }}>
      {props.label}
    </Text>
    <TextInput
      style={{ borderBottomWidth: 2 }}
      placeholder={props.placeholder}
      onChangeText={props.value}
      secureTextEntry={props.secureText}
      onSubmitEditing={props.onSubmitEditing}
    />
  </View>
)

function confirmPasswordsMatch(confirmationPassword, originalPassword) {
  if (confirmationPassword !== originalPassword) {
    alert('Passwords do not match, please try again.')
  }
}

const styles = StyleSheet.create({
  bottomImageStyle: {
    width: width,
    height: width / 3,
    flex: 1,
    alignItems: 'flex-end',
  },
})

export default AccountView
