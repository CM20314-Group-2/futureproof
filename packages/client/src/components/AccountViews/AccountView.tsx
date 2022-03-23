import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import LabelInput from '@components/AccountViews/LabelInput'

const width = Dimensions.get('window').width

type RootStackParamList = {
  MapView : undefined
  AccountView : undefined
  PasswordView : undefined
  PPView : undefined
  ToSView : undefined
  HelpView : undefined
}

type Props = StackScreenProps<RootStackParamList>

const AccountView = ({ navigation } : Props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <View>
      <Image
        style={styles.profilePictureStyle}
        source={require('../../../assets/Account_Icon.png')}
      />
      <LabelInput
        label='Name'
        placeholder='John Smith'
        value={name}
        onChangeText={() => setName(name)}
        secureText={false}
      />
      <LabelInput
        label='Email'
        placeholder='john.smith@gmail.com'
        value={email}
        onChangeText={() => setEmail(email)}
        secureText={false}
      />
      <Text style={styles.bodyText}>Profile Information</Text>
      <Pressable onPress={() => navigation.push('PasswordView')}>
        <Text style={styles.bodyText}>
          {'Change Password                                          >'}
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('PPView')}>
        <Text style={styles.bodyText}>
          {'Privacy Policy                                                 >'}
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('ToSView')}>
        <Text style={styles.bodyText}>
          {'Terms of Service                                            >'}
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('HelpView')}>
        <Text style={styles.bodyText}>
          {
            'Help                                                                  >'
          }
        </Text>
      </Pressable>
      <Image
        style={styles.bottomImageStyle}
        source={require('../../../assets/Bottom_Image_Styling.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  bodyText: {
    borderBottomWidth: 2,
    fontSize: 20,
    padding: '5%',
  },
  bottomImageStyle: {
    height: width / 3,
    width: width,
  },
  profilePictureStyle: {
    alignItems: 'center',
    borderRadius: 150 / 2,
    height: 150,
    width: 150,
  },
})

export default AccountView
