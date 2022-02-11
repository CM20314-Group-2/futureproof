import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { DisplayableBusiness } from '@typings/types'

type LogoProps = Pick<DisplayableBusiness, 'profilePicture'>

const BusinessLogo = ({profilePicture}: LogoProps) => (
  <View style={styles.logoContainerViewStyle}>
    <Image source={{uri: profilePicture == null ? '../../../assets/icon.png' : profilePicture}} style={styles.logoStyle} resizeMode="contain"/>
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