import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ParagraphIcon from '../../assets/icon_paragraph.png'
import { DisplayableBusiness } from '@typings/types'

type ViewProps = Pick<DisplayableBusiness, 'profileText'>

const DescriptionView = ({ profileText }: ViewProps) => (
  <View>
    <Text style={styles.headingText}>{'DESCRIPTION'}</Text>
    <View style={styles.itemBackgroundStyle}>
      <View style={styles.textAndImageContainerStyle}>
        <Image source={ParagraphIcon} style={styles.paragraphIcon} resizeMode="contain" />
        <Text style={styles.bodyText}>{profileText == null ? 'No description available.' : profileText}</Text>
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
  textAndImageContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  paragraphIcon: {
    width: 25,
    height: 25
  },
  bodyText: {
    fontSize: 12,
    color: 'black',
    padding: 10
  }
})

export default DescriptionView