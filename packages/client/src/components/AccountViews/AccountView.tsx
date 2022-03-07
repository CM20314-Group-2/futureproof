import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import PasswordView from '@components/AccountViews/PasswordView'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

type RootStackParamList = {
  MapView: undefined
  AccountView: undefined
  PasswordView: undefined
  PPView: undefined
  ToSView: undefined
  HelpView: undefined
}

type Props = StackScreenProps<RootStackParamList>

const AccountView = ({ navigation }: Props) => {
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
        value={(text) => setName(text)}
      />
      <LabelInput
        label='Email'
        placeholder='john.smith@gmail.com'
        value={(text) => setEmail(text)}
      />
      <Text style={[styles.bodyText, { padding: '5%', color: '#C4C4C4' }]}>
        Profile Information
      </Text>
      <Pressable onPress={() => navigation.push('PasswordView')}>
        <Text style={[styles.bodyText, { padding: '5%' }]}>
          {'Change Password                                          >'}
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('PPView')}>
        <Text style={[styles.bodyText, { padding: '5%' }]}>
          {'Privacy Policy                                                 >'}
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('ToSView')}>
        <Text style={[styles.bodyText, { padding: '5%' }]}>
          {'Terms of Service                                            >'}
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('HelpView')}>
        <Text style={[styles.bodyText, { padding: '5%' }]}>
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

const LabelInput = (props) => (
  // Move a box `View` component here
  <View style={{ padding: '5%' }}>
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
  profilePictureStyle: {
    borderRadius: 150 / 2,
    height: 150,
    width: 150,
    alignItems: 'center',
  },
  bottomImageStyle: {
    width: width,
    height: width / 3,
  },
  headingText: {
    fontWeight: 'bold',
    marginBottom: '2%',
    fontSize: 20,
  },
  bodyText: {
    borderBottomWidth: 2,
    fontSize: 20,
  },
})

export default AccountView
