import { DisplayableBusiness } from "@futureproof/typings";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

<<<<<<< HEAD
type LogoProps = Pick<DisplayableBusiness, "profilePicture">;

const BusinessLogo = ({ profilePicture }: LogoProps) => (
  <View style={styles.logoContainerViewStyle}>
    <Image
      source={
        profilePicture == null
          ? { uri: profilePicture }
          : require("../../../assets/icon.png")
      }
=======
export const DEFAULT_PROFILE_PATH = '../../../assets/icon.png'

type LogoProps = Pick<DisplayableBusiness, 'profilePicture'>

const BusinessLogo = ({ profilePicture = null } : LogoProps) => (
  <View style={styles.logoContainerViewStyle}>
    <Image
      source={profilePicture !== null ? { uri: profilePicture } : require(DEFAULT_PROFILE_PATH)}
>>>>>>> origin/sprint-2
      style={styles.logoStyle}
      resizeMode="contain"
      testID='business-logo'
    />
  </View>
);

const styles = StyleSheet.create({
  logoContainerViewStyle: {
    paddingRight: 10,
  },
  logoStyle: {
<<<<<<< HEAD
    width: 58,
    height: 58,
  },
});

export default BusinessLogo;
=======
    height: 58,
    width: 58
  }
})

export default BusinessLogo
>>>>>>> origin/sprint-2
