import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native'

const IndividualImage = () => {
  ;<TouchableHighlight
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
}
