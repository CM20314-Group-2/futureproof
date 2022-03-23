import React, { useState } from 'react'
import { ScrollView, StyleSheet, Image, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const AccountView = () => {
  return (
    <ScrollView>
      <Image
        style={styles.PPStyle}
        source={require('../../../assets/Privacy_Policy.png')}
      />
      <Image
        style={styles.bottomImageStyle}
        source={require('../../../assets/Bottom_Image_Styling.png')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  PPStyle: {
    height: width * (1303 / 692),
    width: width,
  },
  bottomImageStyle: {
    height: width / 3,
    width: width,
  },
})

export default AccountView
