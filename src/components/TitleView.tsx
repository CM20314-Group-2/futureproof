import { DisplayableBusiness } from '@typings/types'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type ViewProps = Pick<DisplayableBusiness, 'name' | 'profilePicture'>
  
const TitleView = ({ name, profilePicture }: ViewProps ) => (
  <View style={{ alignItems: 'center' }}>
    {profilePicture ? <Image source={{uri: profilePicture}} style={{ width: 90, height: 90, borderRadius: 10 }} resizeMode="contain" /> : null}
    <Text style={styles.titleText}>{name}</Text>
    <Text style={styles.subtitleText}>{'2 Bath Street, Bath, BA1 1AA'}</Text>
  </View>
)

export const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: '500'
  },
  subtitleText: {
    fontSize: 10,
    color: '#A0A0A0'
  },
})

export default TitleView