import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const DEFAULT_PROFILE_PATH = '../../../assets/icon.png'

type LogoProps = Pick<DisplayableBusiness, 'profilePicture'>

const BusinessLogo = ({ profilePicture = null }: LogoProps) => (
  <View style={styles.logoContainerViewStyle}>
    <Image
      source={
        profilePicture !== null
          ? { uri: profilePicture }
          : require(DEFAULT_PROFILE_PATH)
      }
      style={styles.logoStyle}
      resizeMode='contain'
      testID='business-logo'
    />
  </View>
)

const styles = StyleSheet.create({
  logoContainerViewStyle: {
    paddingRight: 10,
  },
  logoStyle: {
    height: 58,
    width: 58,
  },
})

export default BusinessLogo
