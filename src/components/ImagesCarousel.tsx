import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import ImageView from 'react-native-image-viewing'

interface ComponentProps {
  show: boolean
  height: number
}

const ImagesCarousel = ({ show, height }: ComponentProps) => {
  const [visible, setModalVisible] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const images = [
    { uri: Image1 },
    { uri: Image2 },
    { uri: Image3 },
    { uri: Image4 },
  ]

  return (
    <View>
      <Text style={styles.headingText}>IMAGES</Text>
      <ScrollView horizontal>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor='#FFFFFF'
          onPress={() => {
            setModalVisible(true), setModalImageIndex(0)
          }}
        >
          <Image
            blurRadius={0}
            style={styles.imageStyle}
            source={{
              width: 320,
              height: 350,
              uri: Image1,
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor='#FFFFFF'
          onPress={() => {
            setModalVisible(true), setModalImageIndex(1)
          }}
        >
          <Image
            blurRadius={0}
            style={styles.imageStyle}
            source={{
              width: 320,
              height: 350,
              uri: Image2,
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor='#FFFFFF'
          onPress={() => {
            setModalVisible(true), setModalImageIndex(2)
          }}
        >
          <Image
            blurRadius={0}
            style={styles.imageStyle}
            source={{
              width: 320,
              height: 350,
              uri: Image3,
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor='#FFFFFF'
          onPress={() => {
            setModalVisible(true), setModalImageIndex(3)
          }}
        >
          <Image
            blurRadius={0}
            style={styles.imageStyle}
            source={{
              width: 320,
              height: 350,
              uri: Image4,
            }}
          />
        </TouchableHighlight>
      </ScrollView>
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
  imageStyle: {
    borderColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 10,
  },
})

export default ImagesCarousel
