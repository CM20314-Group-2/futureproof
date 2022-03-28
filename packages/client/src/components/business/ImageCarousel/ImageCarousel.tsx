import Image from '@components/business/ImageCarousel/Image'
import React, { useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import ImageView from 'react-native-image-viewing'

const ImagesCarousel = ({ Images } : { Images : string[] }) => {
  const [visible, setModalVisible] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const images = []
  const imageViews = []
  
  for (let i = 0; i < Images.length; i++) {
    images.push({ uri: Images[i] })
    imageViews.push(
      <Image
        key={i}
        onPressFunction={() => {
          setModalVisible(true), setModalImageIndex(i)
        }}
        ImageToDisplay={Images[i]}
      />
    )
  }

  return (
    <View>
      <Text style={styles.headingText}>IMAGES</Text>
      <ScrollView horizontal>{imageViews}</ScrollView>
      <ImageView
        images={images}
        imageIndex={modalImageIndex}
        visible={visible}
        onRequestClose={() => setModalVisible(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: '1%',
    marginLeft: '1%',
  },
})

export default ImagesCarousel
