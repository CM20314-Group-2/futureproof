import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ImageView from 'react-native-image-viewing'


const Image1 = 'https://cdn.vox-cdn.com/thumbor/VAkim2EiaKiIq4pUi295wH99Ces=/0x0:1100x729/1200x800/filters:focal(341x230:517x406)/cdn.vox-cdn.com/uploads/chorus_image/image/67717391/STARBUCKS.0.jpeg'
const Image2 = 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-42658.jpg'
const Image3 = 'https://cdn.vox-cdn.com/thumbor/1WVT8VSapMXbHPvsTEPxZp2gUrk=/0x0:1347x897/1200x800/filters:focal(567x342:781x556)/cdn.vox-cdn.com/uploads/chorus_image/image/62192379/starbucksredcups2015.1541431580.jpg'
const Image4 = 'https://cdn.vox-cdn.com/thumbor/bSoWzne8VZvz8tavhebsL7DNik0=/0x0:5860x4008/1200x800/filters:focal(3243x1967:4179x2903)/cdn.vox-cdn.com/uploads/chorus_image/image/67132574/shutterstock_1410002591.0.jpg'

const images = [
  {
    uri: Image1,
  },
  {
    uri: Image2,
  },
  {
    uri: Image3,
  },
  {
    uri: Image4,
  },
]

const ImagesCarousel = () => {
  const [visible, setModalVisible] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalImageIndex, setModalImageIndex] = useState(0)
  
  return(
    <View>
      <Text style={styles.headingText}>IMAGES</Text>
      <ScrollView horizontal >
        <TouchableHighlight activeOpacity={0.7} underlayColor="#FFFFFF" onPress = {() => {setModalVisible(true), setModalImageIndex(0)}}>
          <Image 
            blurRadius = {0}
            style = {styles.imageStyle}
            source = {{
              width: 320,
              height: 350,
              uri: Image1,
            }}
          />  
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.7} underlayColor="#FFFFFF" onPress = {() => {setModalVisible(true), setModalImageIndex(1)}} >
          <Image 
            blurRadius = {0}
            style = {styles.imageStyle}
            source = {{
              width: 320,
              height: 350,
              uri: Image2,
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.7} underlayColor="#FFFFFF" onPress = {() => {setModalVisible(true), setModalImageIndex(2)}} >
          <Image 
            blurRadius = {0}
            style = {styles.imageStyle}
            source = {{
              width: 320,
              height: 350,
              uri: Image3,
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.7} underlayColor="#FFFFFF" onPress = {() => {setModalVisible(true), setModalImageIndex(3)}} >
          <Image 
            blurRadius = {0}
            style = {styles.imageStyle}
            source = {{
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
  button: {
    borderRadius: 20,
    elevation: 2,
    padding: 10
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22
  },
  headingText: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: '1%',
    marginLeft: '1%'
  },
  imageStyle: {
    borderColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 10
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    margin: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default ImagesCarousel
