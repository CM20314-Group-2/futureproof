import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

type LogoProps = Pick<DisplayableBusiness, 'profilePicture'>

const BusinessLogo = ({profilePicture}: LogoProps) => (
  <View style={styles.logoContainerViewStyle}>
    <Image
      source={profilePicture == null ? {uri: profilePicture} : require('../../../assets/icon.png')}
      style={styles.logoStyle}
      resizeMode="contain"
    />
  </View>
)

const styles = StyleSheet.create({
  logoContainerViewStyle: {
    paddingRight: 10
  },
  logoStyle: {
    width: 58,
    height: 58
  }
})

export default BusinessLogo