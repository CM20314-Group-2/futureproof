import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const DescriptionView = ({ descriptionText }: { descriptionText: string} ) => (
  <View>
    <Text style={styles.headingText}>{'DESCRIPTION'}</Text>
    <View style={styles.itemBackgroundStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
        <Image source={require('../../assets/icon_paragraph.png')} style={{ width: 25, height: 25 }} resizeMode="contain" />
        <Text style={styles.bodyText}>{descriptionText}</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  itemBackgroundStyle: {
    backgroundColor: '#FAF9F9',
    borderRadius: 10
  },
  headingText: {
    fontSize: 12,
    color: '#A0A0A0',
    paddingLeft: 20
  },
  bodyText: {
    fontSize: 12,
    color: 'black',
    padding: 10
  }
})

export default DescriptionView