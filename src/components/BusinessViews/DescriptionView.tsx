import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type ViewProps = Pick<DisplayableBusiness, 'profileText'>

const DescriptionView = ({ profileText }: ViewProps) => (
  <View style={styles.compoundStyle}>
    <Text style={styles.headingText}>DESCRIPTION</Text>
    <View style={styles.itemBackgroundStyle}>
      <View style={styles.textAndImageContainerStyle}>
        <Image
          source={require('../../../assets/icon_paragraph.png')}
          style={styles.paragraphIcon}
          resizeMode='center'
        />
        <Text style={styles.bodyText}>
          {profileText == null ? 'No description available.' : profileText}
        </Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  itemBackgroundStyle: {
    backgroundColor: '#FAF9F9',
    borderRadius: 10,
  },
  headingText: {
    fontSize: 12,
    color: '#A0A0A0',
    marginLeft: '1%',
    marginBottom: '1%',
  },
  textAndImageContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  paragraphIcon: {
    width: 25,
    height: 25,
  },
  bodyText: {
    fontSize: 12,
    color: 'black',
    padding: 10,
  },
  compoundStyle: {
    marginBottom: '8%',
  },
})

export default DescriptionView
