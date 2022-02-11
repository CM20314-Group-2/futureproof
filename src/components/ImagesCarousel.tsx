import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImagesCarousel = () => (
  <View>
    <Text style={styles.headingText}>IMAGES</Text>
    <Image source={{uri: 'assets/Sample_Business_Image.png'}} style={styles.imageStyle} resizeMode="contain" />
  </View>
)
const styles = StyleSheet.create({
  headingText: {
    fontSize: 12,
    color: '#A0A0A0',
    paddingLeft: 20
  },
  imageStyle: {
    width: 250,
    height: 300,
    borderRadius: 10,
    alignSelf: 'center'
  }
})

export default ImagesCarousel