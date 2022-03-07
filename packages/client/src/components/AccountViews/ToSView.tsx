import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const AccountView = () => {
  const [password, setPassword] = useState('')

  return (
    <ScrollView>
      <Image
        style={styles.bottomImageStyle}
        source={require('../../../assets/TOS.webp')}
      />
      <Image
        style={styles.bottomImageStyle}
        source={require('../../../assets/Bottom_Image_Styling.png')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bottomImageStyle: {
    width: width,
    height: width * (171 / 744),
  },
})

export default AccountView
