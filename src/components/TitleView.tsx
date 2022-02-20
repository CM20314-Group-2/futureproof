import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type ViewProps = Pick<DisplayableBusiness, 'name' | 'profilePicture'>
  
const TitleView = ({ name, profilePicture, businessAddress }: {name: string, profilePicture: string, businessAddress: string} ) => (
  <View style={styles.titleViewStyle}>
    {profilePicture ? <Image source={{uri: profilePicture}} style={styles.profilePictureStyle} resizeMode="contain" /> : null}
    <Text style={styles.titleText}>{name}</Text>
    <Text style={styles.subtitleText}>{businessAddress}</Text>
  </View>
)

export const styles = StyleSheet.create({
  titleViewStyle: {
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '8%'
  },
  titleText: {
    fontSize: 25,
    fontWeight: '500'
  },
  subtitleText: {
    fontSize: 10,
    color: '#A0A0A0',
  },
  profilePictureStyle: {
    width: 90,
    height: 90,
    borderRadius: 10
  }
})

export default TitleView