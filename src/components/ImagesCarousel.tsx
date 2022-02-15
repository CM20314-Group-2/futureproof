import React, {useState} from 'react'
import { Image, StyleSheet, Text, View, ScrollView, TouchableHighlight, Modal, Pressable, Alert } from 'react-native'



const ImagesCarousel = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const Image1 = "https://picsum.photos/320/350";
  const Image2 = "https://picsum.photos/320/350";
  const Image3 = "https://picsum.photos/320/350";
  const Image4 = "https://picsum.photos/320/350";
  
  return(
  <View>
    <Text style={styles.headingText}>IMAGES</Text>
    <ScrollView horizontal >
    <TouchableHighlight activeOpacity={0.7} underlayColor="#FFFFFF" onPress = {() => {setModalVisible(true), setModalImage(Image1)}}>
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
      <TouchableHighlight activeOpacity={0.7} underlayColor="#FFFFFF" onPress = {() => {setModalVisible(true), setModalImage(Image2)}} >
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
      <TouchableHighlight activeOpacity={0.7} underlayColor="#FFFFFF" onPress = {() => {setModalVisible(true), setModalImage(Image3)}} >
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
      <TouchableHighlight activeOpacity={0.7} underlayColor="#FFFFFF" onPress = {() => {setModalVisible(true), setModalImage(Image4)}} >
        <Image 
          blurRadius = {0}
          style = {styles.imageStyle}
          source = {{
            width: 310,
            height: 350,
            uri: Image4,
          }}
        />
      </TouchableHighlight>


    </ScrollView>
      <Image source={{uri: 'assets/Sample_Business_Image.png'}} style={styles.imageStyle} resizeMode="contain" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image 
              blurRadius = {0}
              style = {styles.imageStyle}
              source = {{
                width: 320,
                height: 350,
                uri: modalImage,
              }}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  </View>
  )
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 12,
    color: '#A0A0A0',
    marginLeft: '1%',
    marginBottom: '1%'
  },
  imageStyle: {
    borderColor: '#FFFFFF',
    borderWidth: 10,
    borderRadius: 30
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

export default ImagesCarousel