import React, { useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from 'react-native'
import LabelInput from '@components/account/AccountSubViews/LabelInput'

const width = Dimensions.get('window').width

const AccountView = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <ScrollView>
      <LabelInput
        label='Password'
        placeholder='Please enter your password'
        value={password}
        onChangeText={() => setPassword(password)}
        secureText={true}
      />
      <LabelInput
        label='Confirm Password'
        placeholder='Please re-enter your password'
        value={confirmPassword}
        onChangeText={() => setConfirmPassword(confirmPassword)}
        secureText={true}
      />
      <Button
        onPress={() => confirmPasswordsMatch(password, confirmPassword)}
        title='Change Password'
        color='#841584'
      />
      <Image
        style={styles.bottomImageStyle}
        source={require('../../../../assets/Bottom_Image_Styling.png')}
      />
    </ScrollView>
  )
}

function confirmPasswordsMatch(confirmationPassword : string, originalPassword : string) {
  if (confirmationPassword !== originalPassword) {
    alert('Passwords do not match, please try again.')
  }
}

const styles = StyleSheet.create({
  bottomImageStyle: {
    alignItems: 'flex-end',
    flex: 1,
    height: width / 3,
    width: width,
  },
})

export default AccountView
