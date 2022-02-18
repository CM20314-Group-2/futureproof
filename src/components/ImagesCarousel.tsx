import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImagesCarousel = () => (
  <View>
    <Text style={styles.headingText}>IMAGES</Text>
    <Image source={{ uri: 'assets/Sample_Business_Image.png' }} style={styles.imageStyle} resizeMode="contain" />
  </View>
)
const styles = StyleSheet.create({
  headingText: {
    color: '#A0A0A0',
    fontSize: 12,
    paddingLeft: 20
  },
  imageStyle: {
    alignSelf: 'center',
    borderRadius: 10,
    height: 300,
    width: 250
  }
})

export default ImagesCarousel